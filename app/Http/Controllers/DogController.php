<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\MyClasses\Dog;

class DogController extends Controller
{
    public function index(Dog $dog)
    {
        $dogData = $dog->getDogData();

        return view('index', ['data' => $dogData]);
    }
}
