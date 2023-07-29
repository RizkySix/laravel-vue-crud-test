<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Controllers\PostController;
use App\Http\Requests\Auth\LoginRequest;
use App\Providers\RouteServiceProvider;
use Carbon\Carbon;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\View\View;
use Illuminate\Support\Str;

class AuthenticatedSessionController extends Controller
{
    /**
     * Display the login view.
     */
    public function create(): View
    {
        return view('auth.login');
    }

    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request): RedirectResponse
    {
        $request->authenticate();

        $request->session()->regenerate();


         $token = Str::random(25);
        DB::table('temporary_tokens')->where('user_id' , auth()->user()->id)->delete();
        DB::table('temporary_tokens')->insert([
            'user_id' => auth()->user()->id,
            'token' => $token,
            'created_at' => Carbon::now(),
            'updated_at' =>  Carbon::now()
        ]);

        session()->put('token' , $token);
        return redirect()->intended(RouteServiceProvider::HOME);
    }



    public function store_api(LoginRequest $request)
    {
        dd($request);
        $request->authenticate();

        $request->session()->regenerate();

         $token = Str::random(25);
        DB::table('temporary_tokens')->where('user_id' , auth()->user()->id)->delete();
        DB::table('temporary_tokens')->insert([
            'user_id' => auth()->user()->id,
            'token' => $token,
            'created_at' => Carbon::now(),
            'updated_at' =>  Carbon::now()
        ]);

       return response()->json([
        'token' => $token
       ]);
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }
}
