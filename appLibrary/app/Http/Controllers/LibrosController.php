<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Libros;
use App\Http\Controllers\BaseController as BaseController;

class LibrosController extends BaseController
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $libros = Libros::all();
        return $libros;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $libros = new Libros();
        $libros->nombre = $request->nombre;
        $libros->cantidad = $request->cantidad;

        $libros->save();
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $libros = Libros::find($id);
        return $libros;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $libros = Libros::findOrFail($request->id);
        $libros->nombre = $request->nombre;
        $libros->cantidad = $request->cantidad;

        $libros->save();
        return $libros;

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $libros = Libros::destroy($id);
        return $libros;
    }
}
