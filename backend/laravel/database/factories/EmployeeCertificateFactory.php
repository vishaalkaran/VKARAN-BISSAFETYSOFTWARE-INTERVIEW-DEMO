<?php

namespace Database\Factories;

use App\Models\Employee;
use App\Models\Course;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\EmployeeCertificate>
 */
class EmployeeCertificateFactory extends Factory
{
    protected $model = \App\Models\EmployeeCertificate::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'employee_id' => Employee::factory(), // Automatically create a related employee
            'course_id' => Course::factory(),     // Automatically create a related course
            'date_earned' => $this->faker->date(),
        ];
    }
}
