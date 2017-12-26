<?php

namespace App\Models\User;

use Illuminate\Database\Eloquent\Model;

use Illuminate\Auth\Authenticatable;
use Illuminate\Auth\Passwords\CanResetPassword;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Contracts\Auth\CanResetPassword as CanResetPasswordContract;
 
class ModelName extends Model implements AuthenticatableContract, CanResetPasswordContract
{
    use Authenticatable, CanResetPassword, ModelHelpers;

    protected $table = 'users';

    protected $hidden = ['password', 'remember_token'];

    protected $guarded = ['id'];

    protected $fillable = [
        'name', 
    	'login',
        'email',
        'password',
        'firstname',
        'lastname',
        'avatar',
        'sex',
        'active',
        'role',
        'remember_token',
        'created_at',
        'updated_at',
    ];

    public function getFirstNameKg(){return $this->firstnameKg;}
    public function getFirstNameRu(){return $this->firstnameRu;}
    public function getFirstNameEn(){return $this->firstnameEn;}

    public function getLastNameKg(){return $this->lastnameKg;}
    public function getLastNameRu(){return $this->lastnameRu;}
    public function getLastNameEn(){return $this->lastnameEn;}

    public function getFullNameKg(){return $this->firstnameKg.' '.$this->lastnameKg;}
    public function getFullNameRu(){return $this->firstnameRu.' '.$this->lastnameRu;}
    public function getFullNameEn(){return $this->firstnameEn.' '.$this->lastnameEn;}

    public function getFirstName()
    {
        return $this->firstname;
    }

    public function getLastName()
    {
        return $this->lastname;
    }

    public function getFullName()
    {
        return $this->firstname.' '.$this->lastname;
    }

    public function getRole()
    {
        if($this->role == 'user')
            return 'Пользователь';
        if($this->role == 'moder')
            return 'Модератор';
        if ($this->role == 'admin')
            return 'Администратор';
        if($this->role == 'super')
            return 'Супер Администратор';
    }

    public function getLogin()
    {
        return $this->login;
    }

    public function getEmail()
    {
        return $this->email;
    }

    public function getStatus()
    {
        if($this->active)
            return 'status-active';
        else
            return 'status-inactive';
    }

    public function getAvatar()
    {
        return $this->avatar;
    }

    public function getSex()
    {
        if($this->sex == 'male')
            return 'мужчина';
        if($this->sex == 'female')
            return 'женщина';
    }
}