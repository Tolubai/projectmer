<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/status', [
	'uses' => 'ApiAuthController@status'
])->middleware('jwt.auth');

Route::post('/auth', [
	'uses' => 'ApiAuthController@auth'
]);

Route::post('/register', [
	'uses' => 'ApiAuthController@register'
]);

Route::get('/refresh', [
	'uses' => 'ApiAuthController@refresh'
])->middleware('jwt.refresh');

Route::get('/json', [
	'uses' => 'ApiAuthController@json'
]);


// Posts

Route::get('/posts', [
	'uses' => 'PostController@posts'
]);