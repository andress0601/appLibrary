<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Prestamos;
use App\Http\Controllers\BaseController as BaseController;

class PrestamosController extends BaseController
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $prestamos = Prestamos::all();
        return $prestamos;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $prestamos = new Prestamos();
        $prestamos->usuarioId = $request->usuarioId;
        $prestamos->libroId = $request->libroId;

        $prestamos->save();
    }

    /**
     * Display the specified resource.
     */
    public function show(string $usuarioId)
    {
        /*
        $prestamos = Prestamos::where('usuarioId', $usuarioId)->get();
        return $prestamos;
        */
        //$prestamo = Prestamos::with('libroPrestado')->findOrFail($id);
        $prestamos = Prestamos::with('libroPrestado')->where('usuario_id', $usuarioId)->get();
        return $prestamos;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $prestamos = Prestamos::findOrFail($request->id);
        $prestamos->usuarioId = $request->usuarioId;
        $prestamos->libroId = $request->libroId;
        
        
        $prestamos->save();
        return $prestamos;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $prestamos = Prestamos::destroy($id);
        return $prestamos;
    }
}
