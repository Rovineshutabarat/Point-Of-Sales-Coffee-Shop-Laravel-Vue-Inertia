<?php

use App\Http\Controllers\Admin\DashboardController;
use Illuminate\Support\Facades\Route;

Route::prefix("adminpage")->name("adminpage")->group(function () {
    Route::get("/dashboard", [DashboardController::class, "index"])->name("dashboard");
});
