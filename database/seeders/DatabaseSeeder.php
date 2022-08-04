<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        $roleData = [
            ['name' => 'Administrator','guard_name'=>'web'],
            ['name' => 'Subscriber','guard_name'=>'web'],
            ['name' => 'Editor','guard_name'=>'web'],
            ['name' => 'Author','guard_name'=>'web'],
        ];
        $role = Role::insert($roleData);
    }
}
