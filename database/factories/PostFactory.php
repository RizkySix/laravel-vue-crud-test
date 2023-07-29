<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Post>
 */
class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
           'user_id' => mt_rand(1,20),
           'judul_post' => fake()->company(),
           'deskripsi' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, ad.'
        ];
    }
}
