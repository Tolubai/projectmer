<?php
namespace App\Models\User;

trait ModelHelpers
{
    public function isUser()
    {
        return $this->role == 'user';
    }
    public function isModer()
    {
        return $this->role = 'moder';
    }

    public function isAdmin()
    {
    	return $this->role == 'admin';
    }

    public function isSuper()
    {
    	return $this->role == 'super';
    }

}