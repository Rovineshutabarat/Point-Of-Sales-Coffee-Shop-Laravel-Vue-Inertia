<script>
import axios from "axios";
import { useForm } from "@inertiajs/vue3";
import { useToast } from "vue-toastification";

export default {
    data() {
        return {
            task: useForm({
                title: null,
                description: null,
                deadline: null,
            }),
            toast: useToast(),
            isSubmitting: false,
        };
    },
    methods: {
        async submit() {
            try {
                this.isSubmitting = true;
                const response = await axios.post("/adminpage/task", this.task);
                if (response.status === 200) {
                    this.toast.success(response.data.message);
                }
            } catch (error) {
                this.toast.error(error.response.data.message);
            } finally {
                this.task.reset();
                this.isSubmitting = false;
            }
        },
    },
};
</script>

<template>
    <div class="dropdown dropdown-end">
        <div tabindex="0" role="button">
            <Icon
                light="https://img.icons8.com/ios/50/todo-list--v1.png"
                dark="https://img.icons8.com/ios/50/FFFFFF/todo-list--v1.png"
                :enableHover="true"
            />
        </div>
        <div
            class="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow-md bg-base-100 rounded-box w-64"
            tabindex="0"
        >
            <div class="flex flex-col gap-y-1 items-center py-3">
                <h1 class="text-[16px] font-semibold">Task List</h1>
                <h1 class="text-[13px]">You Have 3 on Going Task</h1>
            </div>

            <form method="post" @submit.prevent="submit">
                <label for="title" class="label label-text-alt">Title</label>
                <input
                    type="text"
                    name="title"
                    v-model="task.title"
                    placeholder="Task Title"
                    class="input input-sm input-bordered rounded-md w-full"
                />
                <div v-if="task.errors.title">{{ task.errors.title }}</div>

                <label for="title" class="label label-text-alt"
                    >Description</label
                >
                <input
                    type="text"
                    name="description"
                    v-model="task.description"
                    placeholder="Task Description"
                    class="input input-sm input-bordered rounded-md w-full"
                />
                <div v-if="task.errors.description">
                    {{ task.errors.description }}
                </div>

                <label for="title" class="label label-text-alt">Due Date</label>
                <input
                    type="date"
                    name="deadline"
                    v-model="task.deadline"
                    class="flex justify-center w-full input input-bordered input-sm rounded-md"
                />
                <div v-if="task.errors.deadline">
                    {{ task.errors.deadline }}
                </div>

                <button
                    type="submit"
                    :disabled="isSubmitting"
                    class="btn btn-sm btn-secondary w-full my-2 mt-3"
                >
                    Submit
                </button>
            </form>
        </div>
    </div>
</template>
