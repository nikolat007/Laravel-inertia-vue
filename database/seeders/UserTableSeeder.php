<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->delete();
		$countries = array(
            array( 'firstName' => 'Admin', 
            'lastName' => 'Admin', 
            'email' => 'admin@pizzamaster.com', 
            'password' => bcrypt('adminpizzamaster'),
            'contactNumber' => '789789789', 
            'admin' => true,
            'created_at' => Carbon::now(), 
            'updated_at' => Carbon::now()),
			
		);
		DB::table('users')->insert($countries);
    }
}
