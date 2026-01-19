<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $validated = $request->validate([
            'username' => 'required',
            'password' => 'required'
        ]);

        try {
            if (Auth::attempt($validated)) {
                $request->session()->regenerate();
                return response()->json([
                    'success' => true,
                    'message' => 'Login Successful',
                    'user'    => Auth::user()
                ]);
            }

            return response()->json([
                'success' => false,
                'message' => 'Username atau password yang Anda masukkan salah.'
            ], 401);
        } catch (\Throwable $e) {
            report($e);
            return response()->json([
                'success' => false,
                'message' => 'Terjadi masalah pada server. Coba beberapa saat lagi.'
            ]);
        }
    }

    public function logout(Request $request)
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return response()->json([
            'success' => true,
            'message' => 'Logged out successfully'
        ], 200);
    }
}
