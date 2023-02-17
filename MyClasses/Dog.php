<?php

namespace App\MyClasses;

class Dog
{
    private $name;
    private $kind;

    public function __construct()
    {
        $this->name = 'ポチ';
        $this->kind = '柴犬';
    }

    public function getDogData()
    {
        return 'こちらは' . $this->kind . 'の' . $this->name . 'です。';
    }
}
