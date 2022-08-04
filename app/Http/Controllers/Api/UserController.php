<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;

use App\Traits\ApiResponser;

class UserController extends Controller
{
    use ApiResponser;

    public function index(Request $request) {
       
        $user = User::with('roles:name')->find(auth()->user())->first();        
        return $this->success(200,"Profile Data",$user);
    }
    public function getUserList(Request $request) {
        $perPage = $request->get('perPage');
        if($perPage ==""){
            $perPage = 10;
        }
        
        $role = auth()->user()->getRoleNames()->first();
        if($role=="Administrator"){
            $user = User::with('roles:name')->latest()->paginate($perPage);
        }else{
            $user = User::role([$role])->with('roles:name')->latest()->paginate($perPage);
        }
        return $this->success(200,"Profile Data",$user);
    }
}
