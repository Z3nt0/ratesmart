<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
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
            // Return a server error response if something goes wrong
            return response()->json([
                'message' => 'An error occurred during registration',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public function login(Request $request)
    {
        // Validate the incoming request data
        $validator = Validator::make($request->all(), [
            'username' => 'required|string',
            'password' => 'required|string',
        ]);

        // Check if validation fails
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        // Attempt to authenticate the user
        if (!Auth::attempt($request->only('username', 'password'))) {
            return response()->json(['message' => 'Invalid credentials'], 401);
        }

        $user = Auth::user();

        // Create a token for the user
        $token = $user->createToken('auth_token')->plainTextToken;

        // Return a success response with the token
        return response()->json([
            'message' => 'Login successful',
            'access_token' => $token,
            'token_type' => 'Bearer',
            'user' => $user
        ]);
    }
}
