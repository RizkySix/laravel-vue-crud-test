<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'nama_produk' => fake()->name(),
            'harga' => mt_rand(10000, 500000),
            'deskripsi' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ea ab molestiae placeat consequatur perspiciatis laboriosam in ipsa a explicabo maiores corporis, sequi ipsam repellendus!'
        ];
    }
}
