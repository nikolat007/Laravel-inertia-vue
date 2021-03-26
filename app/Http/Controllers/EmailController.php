<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactMail;
use Illuminate\Support\Facades\Validator;

class EmailController extends Controller
{
    public function contact(Request $request){
        $validator = Validator::make($request->all(), [
            'userEmail' => 'required|email',
            'userName' => 'required|min:5',
            'subject' => 'required',
            'message' => 'required|min:10',
        ]);
        if ($validator->fails()) {
            return redirect()->to(route('home').'#contact')->withErrors($validator);
        }
        $data = array(
            'emailFrom' => $request['userEmail'],
            'name' => $request['userName'],
            'subject' => $request['subject'],
            'bodyMessage' => $request['message']
        );
        $sender = $request->userMail;
        Mail::to(env('MAIL_USERNAME'))->send(new ContactMail($data));
        return redirect()->to(route('home').'#contact')->with(['mailConfirmation' => 'Mail has been sent.']);
    }
}
