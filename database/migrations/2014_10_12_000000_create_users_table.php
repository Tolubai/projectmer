<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::defaultStringLength(191);
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');

            $table->string('login');
            $table->string('email')->nullable();
            $table->string('password', 60);

            $table->string('firstnameKg')->nullable();
            $table->string('firstnameRu')->nullable();
            $table->string('firstnameEn')->nullable();

            $table->string('lastnameKg')->nullable();
            $table->string('lastnameRu')->nullable();
            $table->string('lastnameEn')->nullable();
            
            $table->string('avatar')->nullable();
            $table->string('sex')->nullable();

            $table->boolean('active')->default(0);
            $table->enum('role', ['user','moder','admin','super'])->nullable()->default('user');

            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
