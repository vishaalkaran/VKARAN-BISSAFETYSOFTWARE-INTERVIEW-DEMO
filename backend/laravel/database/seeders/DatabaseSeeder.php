<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Company;
use App\Models\Employee;
use App\Models\Course;
use App\Models\EmployeeCertificate;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run()
    {
        // Create 5 companies
        $companies = Company::factory()->count(5)->create();

        // Create 50 employees, assigning each to a company
        $employees = Employee::factory()
            ->count(50)  // Create 50 employees
            ->make();    // Generate the employees but not save to the database yet

        // Assign employees to companies
        foreach ($employees as $index => $employee) {
            $employee->company_id = $companies[$index % 5]->company_id;  // Assign employees to companies in a round-robin way
            $employee->save();
        }

        // Create 20 courses
        $courses = Course::factory()->count(20)->create();

        // Create employee certificates
        Employee::all()->each(function ($employee) use ($courses) {
            // Assign certificates to random courses
            EmployeeCertificate::factory()
                ->count(5) // Each employee earns 5 certificates
                ->for($employee)
                ->for($courses->random()) // Random course
                ->create();
        });
    }
}
