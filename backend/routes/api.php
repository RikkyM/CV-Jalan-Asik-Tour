<?php

use App\Http\Controllers\Api\Auth\AuthController;
use App\Http\Controllers\Api\TemplateController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');

Route::prefix('/v1')->middleware('web')->group(function () {
    // Route::apiResource('/template', TemplateController::class);
    Route::post('/login', [AuthController::class, 'login']);

    Route::middleware('auth:sanctum')->group(function () {
        Route::get('/user', function () {
            return response()->json(Auth::user());
        });


        Route::post('/logout', [AuthController::class, 'logout']);
    });
});
