<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use App\Mail\ContactMail;
use App\Http\Controllers;

/*Route::get('/', function(){
    return Inertia::render('Home', [
        "Name" => "Jelena"
    ]);
});*/


Route::get('/', [
    'uses' => 'App\Http\Controllers\HomeController@home',
    'as' => 'home'
]);


Route::get('/cart', [
    'uses' => 'App\Http\Controllers\CartController@cart',
    'as' => 'cart'
]);

/*
Route::get('/profile', 'App\Http\Controllers\ProfileController@profile');*/


Route::get('/login', [
    'uses' => 'App\Http\Controllers\UserController@loginPage',
    'as' => 'login'
]);


Route::get('/register',['as' => 'register', function () {
    return Inertia::render('Register');
}]);


Route::post('/userRegister', [
    'uses' => 'App\Http\Controllers\UserController@register',
    'as' => 'userRegister'
]);


Route::post('/userLogin', [
    'uses' => 'App\Http\Controllers\UserController@login',
    'as' => 'userLogin'
]);


Route::post('/order', [
    'uses' => 'App\Http\Controllers\OrderController@order',
    'as' => 'order'
]);


Route::get('/logout', [
    'uses' => 'App\Http\Controllers\UserController@logout',
    'as' => 'logout'
]);

/*
Route::get('/products', [
    'uses' => 'App\Http\Controllers\ProductController@list',
    'as' => 'products'
]);

Route::get('/product/{id}', [
    'uses' => 'App\Http\Controllers\ProductController@listProduct',
    'as' => 'product'
]);

*/
Route::get('/cartadd/{id}', [
    'uses' => 'App\Http\Controllers\CartController@cartAdd',
    'as' => 'cartAdd'
]);

Route::get('/cartIncreaseQuantity/{id}', [
    'uses' => 'App\Http\Controllers\CartController@cartIncreaseQuantity',
    'as' => 'itemIncrease'
]);

Route::get('/cartDecreaseQuantity/{id}', [
    'uses' => 'App\Http\Controllers\CartController@cartDecreaseQuantity',
    'as' => 'itemDecrease'
]);

Route::get('/removeitem/{id}', [
    'uses' => 'App\Http\Controllers\CartController@removeItem',
    'as' => 'removeitem'
]);
/*
Route::post('/removeUser', [
    'uses' => 'App\Http\Controllers\AdminController@removeUser',
    'as' => 'removeUser'
]);
*/


Route::get('/orderconfirmation', [
    'uses' => 'App\Http\Controllers\OrderController@confirm',
    'as' => 'orderConfirmation'
]);

/*
//------------dashboard---------------------

*/
Route::get('/dashboard', [
    'uses' => 'App\Http\Controllers\AdminController@index',
    'as' => 'dashboard'
]);

Route::get('/dashboard/users', [
    'uses' => 'App\Http\Controllers\AdminController@userlist',
    'as' => 'userList'
]);

Route::get('/dashboard/orders', [
    'uses' => 'App\Http\Controllers\AdminController@orderlist',
    'as' => 'orderList'
]);

Route::get('/dashboard/confirmedorders', [
    'uses' => 'App\Http\Controllers\AdminController@confirmedorderlist',
    'as' => 'corderList'
]);

Route::get('/dashboard/products', [
    'uses' => 'App\Http\Controllers\AdminController@productlist',
    'as' => 'productList'
]);

/*
Route::post('/dashboard/vieworder', [
    'uses' => 'App\Http\Controllers\AdminController@vieworder',
    'as' => 'vieworder'
]);

Route::get('/dashboard/editproduct/{id}', [
    'uses' => 'App\Http\Controllers\AdminController@editproduct',
    'as' => 'editProduct'
]);

Route::post('/dashboard/editproductvalues', [
    'uses' => 'App\Http\Controllers\AdminController@editproductvalues',
    'as' => 'editProductValues'
]);

Route::get('/dashboard/addnewproduct', [
    'uses' => 'App\Http\Controllers\AdminController@addnewproduct',
    'as' => 'addnewProduct'
]);

Route::post('/dashboard/addproduct', [
    'uses' => 'App\Http\Controllers\AdminController@addproduct',
    'as' => 'addProduct'
]);

Route::post('/dashboard/removeproduct', [
    'uses' => 'App\Http\Controllers\AdminController@removeproduct',
    'as' => 'removeProduct'
]);

Route::post('/dashboard/confirmorder', [
    'uses' => 'App\Http\Controllers\AdminController@confirmOrder',
    'as' => 'confirmOrder'
]);

//-------------endpoints--------------------

Route::get('/admin/listusers', [
    'uses' => 'App\Http\Controllers\AdminController@readUsers',
    'as' => 'listUsers'
]);

Route::get('/admin/listpendingorders', [
    'uses' => 'App\Http\Controllers\AdminController@readpendingOrders',
    'as' => 'listpendingOrders'
]);

Route::get('/admin/listconfirmedorders', [
    'uses' => 'App\Http\Controllers\AdminController@readconfirmedOrders',
    'as' => 'listconfirmedOrders'
]);

Route::get('/admin/listproducts', [
    'uses' => 'App\Http\Controllers\AdminController@readProducts',
    'as' => 'listProducts'
]);

Route::get('/admin/dashboard', [
    'uses' => 'App\Http\Controllers\AdminController@dashboard',
    'as' => 'dashboardstats'
]);

Route::get('/admin/notifications', [
    'uses' => 'App\Http\Controllers\AdminController@notifications',
    'as' => 'notifications'
]);

//---------------mail---------------------



Route::post('/contactmail', [
    'uses' => 'App\Http\Controllers\EmailController@contact',
    'as' => 'contactmail'
]);*/
