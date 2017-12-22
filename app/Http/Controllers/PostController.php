<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PostController extends Controller
{
		$result = array(
			'data' => Post::all()
		 );
		return json_encode($result);
}
