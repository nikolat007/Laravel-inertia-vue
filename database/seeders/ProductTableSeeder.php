<?php

namespace Database\Seeders;
use Carbon\Carbon;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('products')->delete();
		$countries = array(
            array( 'productName' => 'Quattro Stagioni', 'cover' => 'quattrostagioni.png', 'description' => 'tomato sauce mozzarella, ham, black olives, mushrooms, artichoke peas, salami, eggs', 'price' => '6', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()),
			array( 'productName' => 'Margherita', 'cover' => 'margherita.png', 'description' => 'sliced buffalo, mozzarella from Campania, basil, extra virgin, olive oil','price' => '7', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()),
			array( 'productName' => 'New York', 'cover' => 'nypizza.png', 'description' => 'tomato sauce, teaspon salt, mozzarella cheese, choped fresh basil, romano cheese', 'price' => '8.5', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()),
		);
		DB::table('products')->insert($countries);
    }
}
