<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Task;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class TaskController extends Controller
{
    public function store(Request $request)
    {
        $createTask = Task::create($request->validate(
            [
                "title" => "required|string",
                "description" => "nullable|string|nullable",
                "deadline" => "date|nullable"
            ]
        ));
        if ($createTask) {
            return response()->json(["message" => "Task Created Successfully"]);
        }

        return Redirect::back()->withErrors(["error" => "Failed"]);
    }
}
