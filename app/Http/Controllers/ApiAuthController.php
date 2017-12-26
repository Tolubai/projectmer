<?php

namespace App\Http\Controllers;

use JWTAuth;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Tymon\JWTAuth\Exceptions\JWTExeption; 

class ApiAuthController extends Controller
{
   
    public function auth(Request $request){

        $credentials = $request->only('email', 'password');
        $token = null;
        try {
           if (!$token = JWTAuth::attempt($credentials)) {
            return response()->json(['message' => 'Email или пароль введен не верно'], 422);
           }
        } catch (JWTAuthException $e) {
            return response()->json(['message' => 'Failed to create token'], 500);
        }
	    return response()->json([
	    	'status'=>'success',
	    	'token'=>$token,
	    	'message'=>'Вошли в систему!'
	    ], 200);
    }

    public function register(Request $request)
    {
    	

    	$email = request()->email;
    	$name = request()->name;
    	$password = request()->password;
    	$token = request()->token;

    	$user = User::create([
    		'name' => $name,	
    		'email' => $email,	
    		'password' => bcrypt($password),	
    		'remember_token' => $token,	
    	]);

    	$token = JWTAuth::fromUser($user);

    	return response()->json([
    		'token' => $token,
    		'message' => 'Азамат. Катталдың.'
    	], 200);
    }
    public function status(Request $request)
    {
    	$token = JWTAuth::getToken();

	    $user = JWTAuth::toUser($token);

	    return response()->json([
	    	'status'=>'success',
	    	'message'=>'Successfully logged in.',
	    	'data'=>$user
	    ]);
    }

    public function refresh(Request $request)
    {

		$current_token  = JWTAuth::getToken();
		// dd($current_token);
        $token          = JWTAuth::refresh($current_token);

        return response()->json([
	    	'message'=>'Refresh token',
	    	'token'=>$token
	    ]);
	}

	public function json()
	{
		$result = array(
			'data' => User::all()
		 );
		return json_encode($result);
	}
}

