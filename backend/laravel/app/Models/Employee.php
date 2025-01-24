<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    use HasFactory;

    protected $primaryKey = 'employee_id';

    protected $fillable = ['name', 'email', 'company_id'];

    public function company()
    {
        return $this->belongsTo(Company::class, 'company_id');
    }

    public function certificates()
    {
        return $this->hasMany(EmployeeCertificate::class, 'employee_id');
    }
}