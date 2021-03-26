<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Notification;
use App\Notifications\NewUserNotification;
use Inertia\Inertia;

class UserController extends Controller
{

    public function loginPage(){
        if(Auth::check())
        {
            return redirect()->route('home');
        }
        else
        {
            return Inertia::render('Login');
        }
    }

    public function register(Request $request){
        $this->validate($request, [
            'firstname' => 'required',
            'lastname' => 'required',
            'email' => 'required|email:rfc,dns|unique:users',
            'password' => 'required|min:4',
            'contactNumber' => 'required|min:5',
        ]);

        $firstName = $request['firstname'];
        $lastName = $request['lastname'];
        $email = $request['email'];
        $password = bcrypt($request['password']);
        $contactNumber = $request['contactNumber'];

        $user = new User();
        $user->firstName = $firstName;
        $user->lastName = $lastName;
        $user->email = $email;
        $user->password = $password;
        $user->contactNumber = $contactNumber;
        $user->save();

        Auth::login($user);

        $admin = User::where('id', 1)->get();
        Notification::send($admin, new NewUserNotification($user));

        return redirect()->route('home');
    }

    public function login(Request $request){
        $this->validate($request, [
            'email' => 'required|email',
            'password' => 'required'
        ]);

        if(Auth::attempt([ 'email' => $request['email'], 'password' => $request['password'] ])) {
            return redirect()->route('home');
        }
        return redirect()->back()->with(['errorMessage' => 'Incorrect email or password' ]);
    }


    public function logout(){
        Auth::logout();
        return redirect()->route('home');
    }

}
