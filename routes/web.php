<?php

use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\ProductController;
use App\Http\Controllers\Admin\TaskController;
use Illuminate\Support\Facades\Route;

Route::prefix("adminpage")->name("adminpage.")->group(function () {
    Route::get("/dashboard", [DashboardController::class, "index"])->name("dashboard");
    Route::get("/product", [ProductController::class, "index"])->name("product");
    Route::post("/task", [TaskController::class, "store"])->name("task.create");
});
