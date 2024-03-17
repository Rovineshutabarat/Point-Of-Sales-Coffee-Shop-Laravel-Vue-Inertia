<script>
import { useStore } from "../../../store/store.js";
import profileMenu from "./partials/profile-menu.vue";
export default {
    components: {
        "profile-menu": profileMenu,
    },
    data() {
        return {
            store: useStore(),
        };
    },
};
</script>

<template>
    <div
        class="flex justify-between text-sm items-center p-2 rounded-lg px-5 mt-2 bg-primary shadow"
    >
        <div class="flex justify-center items-center gap-x-5">
            <div class="icon">
                <img
                    src="https://img.icons8.com/material-sharp/24/menu--v1.png"
                    alt="hamburger-menu.png"
                    class="dark:invert h-6 w-6 cursor-pointer"
                />
            </div>
            <!-- <SitePath /> -->
        </div>
        <div class="flex justify-center items-center gap-x-10">
            <div class="flex justify-center items-center gap-x-2">
                <div class="icon">
                    <img
                        :src="
                            store.theme === 'light'
                                ? 'https://img.icons8.com/ios/50/sun--v1.png'
                                : 'https://img.icons8.com/sf-regular/48/moon-symbol.png'
                        "
                        alt="theme-switcher.png"
                        class="dark:invert h-6 w-6 cursor-pointer"
                        @click="store.changeTheme"
                    />
                </div>
                <img
                    src="https://img.icons8.com/material-sharp/24/menu--v1.png"
                    alt=""
                    class="dark:invert"
                />
            </div>

            <profile-menu />
        </div>
    </div>
</template>
