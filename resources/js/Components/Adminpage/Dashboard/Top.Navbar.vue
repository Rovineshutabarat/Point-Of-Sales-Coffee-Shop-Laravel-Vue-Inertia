<script>
export default {};
</script>

<template>
    <div
        class="flex justify-between text-sm items-center p-2 rounded-lg px-5 mt-2 bg-primary shadow"
    >
        <div class="flex justify-center gap-x-5 items-center">
            <div class="hover:bg-base-100 p-2 rounded-full cursor-pointer">
                <img
                    src="https://img.icons8.com/ios-filled/50/menu--v1.png"
                    alt="menu.png"
                    class="h-5 w-5 swap-off"
                />
            </div>
            <div class="text-sm breadcrumbs">
                <ul>
                    <li>Adminpage</li>
                    <li>Dashboard</li>
                </ul>
            </div>
        </div>
        <div class="flex justify-center items-center gap-x-8">
            <div class="flex justify-center items-center gap-x-1">
                <div
                    class="tooltip tooltip-bottom font-medium"
                    data-tip="Change Theme"
                >
                    <label
                        class="swap swap-rotate hover:bg-base-100 p-2 rounded-full"
                    >
                        <input type="checkbox" />
                        <img
                            src="https://img.icons8.com/ios/50/do-not-disturb-2.png"
                            alt="moon.png"
                            class="h-6 w-6 swap-on"
                        />
                        <img
                            src="https://img.icons8.com/ios/50/sun--v1.png"
                            alt="sun.png"
                            class="h-6 w-6 swap-off"
                        />
                    </label>
                </div>
                <div
                    class="p-2 hover:bg-base-100 rounded-full cursor-pointer tooltip tooltip-bottom font-medium"
                    data-tip="Task List"
                >
                    <img
                        src="https://img.icons8.com/ios/50/assignment-turned-in.png"
                        alt="todo.png"
                        class="h-5 w-5"
                    />
                </div>
                <div
                    class="p-2 hover:bg-base-100 rounded-full cursor-pointer tooltip tooltip-bottom font-medium"
                    data-tip="Notification"
                >
                    <img
                        src="https://img.icons8.com/ios/50/appointment-reminders--v1.png"
                        alt="notification.png"
                        class="h-5 w-5"
                    />
                </div>
            </div>
            <div class="flex justify-center items-center gap-x-1">
                <h1 class="font-medium">Rovines Hutabarat</h1>
                <div class="dropdown dropdown-end">
                    <div
                        tabindex="0"
                        role="button"
                        class="btn btn-ghost btn-circle avatar"
                    >
                        <div class="w-9 rounded-full">
                            <img
                                alt="profile.png"
                                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                            />
                        </div>
                    </div>
                    <ul
                        tabindex="0"
                        class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                    >
                        <li>
                            <a>Profile</a>
                        </li>
                        <li>
                            <a>Setting</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
