<?php

use App\Http\Controllers\LibrosController;
use App\Http\Controllers\PrestamosController;
use App\Http\Controllers\RegisterController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::controller(RegisterController::class)->group(function(){
    Route::post('register', 'register');
    Route::post('login', 'login');
});

Route::controller(LibrosController::class)->group(function (){
    Route::get('/libros', 'index');
    Route::post('/libro', 'store');
    Route::get('/libro/{id}', 'show');
    Route::put('/libro/{id}', 'update');
    Route::get('/libro/{id}', 'destroy');
});

Route::controller(PrestamosController::class)->group(function (){
    Route::get('/prestamos', 'index');
    Route::post('/libro', 'store');
    Route::get('/prestamo/{usuarioId}', 'show');
    Route::put('/prestamo/{id}', 'update');
    Route::get('/prestamo/{id}', 'destroy');
});
/*
Route::middleware('auth:sanctum')->group( function () {

    Route::controller(LibrosController::class)->group(function (){
        Route::get('/libros', 'index');
        Route::post('/libro', 'store');
        Route::get('/libro/{id}', 'show');
        Route::put('/libro/{id}', 'update');
        Route::get('/libro/{id}', 'destroy');
    });
    
    Route::controller(PrestamosController::class)->group(function (){
        Route::get('/prestamos', 'index');
        Route::post('/libro', 'store');
        Route::get('/prestamo/{usuarioId}', 'show');
        Route::put('/prestamo/{id}', 'update');
        Route::get('/prestamo/{id}', 'destroy');
    });

});*/

