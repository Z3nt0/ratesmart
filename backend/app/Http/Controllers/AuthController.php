<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use App\Models\User;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        // Validate the incoming request data
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'username' => 'required|string|max:255|unique:users',
            'password' => [
                'required',
                'string',
                'min:8',
                'regex:/[!@#$%^&*(),.?":{}|<>]/',
            ],
        ]);

        // Check if validation fails
        if ($validator->fails()) {
            Log::warning('Registration validation failed', ['errors' => $validator->errors()]);
            return response()->json(['errors' => $validator->errors()], 422);
        }

        try {
            // Create the new user
            $user = User::create([
                'name' => $request->name,
                'username' => $request->username,
                'password' => Hash::make($request->password),
            ]);

            // Return a success response with the created user data
            return response()->json([
                'message' => 'User registered successfully',
                'user' => $user
            ], 201);

        } catch (\Exception $e) {
            // Log the error message and return a server error response
            Log::error('Error during registration', ['exception' => $e->getMessage()]);
            return response()->json([
                'message' => 'An error occurred during registration',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public function login(Request $request)
    {
        // Log the incoming request data (for debugging purposes)
        Log::info('Login attempt', ['username' => $request->username]);

        // Validate the incoming request data
        $validator = Validator::make($request->all(), [
            'username' => 'required|string',
            'password' => 'required|string',
        ]);

        if ($validator->fails()) {
            Log::warning('Login validation failed', ['errors' => $validator->errors()]); 
            return response()->json(['errors' => $validator->errors()], 422);
        }

        // Attempt to authenticate the user (case-insensitive)
        if (!Auth::attempt(['username' => $request->username, 'password' => $request->password], false)) { 
            Log::warning('Authentication failed', ['username' => $request->username]);
            return response()->json(['message' => 'Invalid credentials'], 401);
        }

        $user = Auth::user();

        if (!$user) {
            Log::error('User not found after successful authentication'); 
            return response()->json(['message' => 'User not found'], 404); 
        }

        // Create a token for the user
        try {
            $token = $user->createToken('auth_token')->plainTextToken;
            Log::info('Token created successfully', ['username' => $request->username, 'token' => $token]);
        } catch (\Exception $e) {
            Log::error('Error creating token', ['exception' => $e->getMessage(), 'trace' => $e->getTraceAsString()]);
            return response()->json(['message' => 'Failed to create token'], 500);
        }

        // Return a success response with the token
        return response()->json([
            'message' => 'Login successful',
            'access_token' => $token,
            'token_type' => 'Bearer',
            'user' => $user
        ]);
    }

    public function logout(Request $request)
    {
        // Get the currently authenticated user
        $user = $request->user();

        if ($user) {
            // Revoke all tokens the user has issued
            $user->tokens()->delete();

            return response()->json([
                'message' => 'Logout successful'
            ], 200);
        }

        return response()->json([
            'message' => 'No authenticated user found'
        ], 401);
    }
}
