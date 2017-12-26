<?php

use Illuminate\Database\Seeder;
use App\Models\User\ModelName as User;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::truncate();
        User::create([
            'login' => 'vertex',
            'email' => 'eldos.kadyrov@gmail.com',
            'password' => bcrypt('stargate2015'),

            'firstnameKg' => 'Eldos',
            'lastnameKg' => 'Kadyrov',
            'avatar' => 'assets/bashkaruu/img/avatars/vertex.png',
            'sex' => 'male',

            'active' => true,
            'role' => 'super',
        ]);
        User::create([
            'login' => 'shady',
            'email' => 'kendirbaev.aibek@gmail.com',
            'password' => bcrypt('slimshady11'),

            'firstnameKg' => 'Aibek',
            'lastnameKg' => 'Kendirbaev',
            'avatar' => 'assets/bashkaruu/img/avatars/shady.png',
            'sex' => 'male',

            'active' => true,
            'role' => 'admin',
        ]);
    }
}
