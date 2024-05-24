<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Libros;

class Prestamos extends Model
{

    use HasFactory;

    protected $fillable = [
        'usuarioId',
        'libroId',
    ];

    /**
    * Obtener libro prestado
    */
    public function libroPrestado() 
    {   
        return $this->belongsTo(Libros::class, 'libro_id', 'id');
    }
}
