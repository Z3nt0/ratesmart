<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Form;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class FormController extends Controller
{
    public function store(Request $request)
    {
        try {
            // Validate the request data
            $validatedData = $request->validate([
                'formtitle' => 'required|string|max:255',
                'formdescription' => 'nullable|string|max:255',
                'formimage' => 'nullable|string',
                'link' => 'nullable|string|max:255',
            ]);

            // Get the authenticated user's ID
            $userId = Auth::id();

            // Create a new form instance and assign the validated data
            $form = new Form();
            $form->user_id = $userId;
            $form->formtitle = $validatedData['formtitle'];
            $form->formdescription = $validatedData['formdescription'];
            $form->formimage = $validatedData['formimage'];
            $form->link = $validatedData['link'];
            $form->save();

            // Return a success response
            return response()->json(['message' => 'Form created successfully', 'form' => $form], 201);

        } catch (\Exception $e) {
            // Log the error details
            Log::error('Failed to create form', [
                'error' => $e->getMessage(),
                'trace' => $e->getTraceAsString(),
            ]);

            // Return a failure response with the error message
            return response()->json(['message' => 'Failed to create form', 'error' => $e->getMessage()], 500);
        }
    }
}
