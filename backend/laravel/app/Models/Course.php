<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    use HasFactory;

    protected $primaryKey = 'course_id';

    protected $fillable = ['title', 'description'];

    public function certificates()
    {
        return $this->hasMany(EmployeeCertificate::class, 'course_id');
    }
}