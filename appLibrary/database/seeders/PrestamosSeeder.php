<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Prestamos;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class PrestamosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    
    {
        // Suponiendo que ya tienes usuarios y libros en tus tablas
        $usuarios = DB::table('users')->pluck('id')->toArray();
        $libros = DB::table('libros')->pluck('id')->toArray();

        // Crear 10 préstamos de ejemplo
        for ($i = 0; $i < 10; $i++) {
            DB::table('prestamos')->insert([
                'usuario_id' => $usuarios[array_rand($usuarios)],
                'libro_id' => $libros[array_rand($libros)],
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
