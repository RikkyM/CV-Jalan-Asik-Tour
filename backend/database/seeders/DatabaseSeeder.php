<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        // User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        // User::create([
        //     'name' => 'admin',
        //     'email' => 'admin@mail.com',
        //     'password' => '123456'
        // ]);

        User::create([
            'name' => 'Tour Jalan Asik',
            'username' => 'tourjalanasik',
            'password' => 123456
        ]);
    }
}
