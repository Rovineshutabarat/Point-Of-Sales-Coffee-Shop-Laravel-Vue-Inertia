<script>
import { useStore } from "../../../store/store.js";
import MenuButton from "./partials/MenuButton.vue";
import PageSitePath from "./partials/PageSitePath.vue";
import ThemeSwitcher from "./partials/ThemeSwitcher.vue";
import FullScreenButton from "./partials/FullScreenButton.vue";
import NotificationButton from "./partials/NotificationButton.vue";
import TaskButton from "./partials/TaskButton.vue";
import ProfileButton from "./partials/ProfileButton.vue";

export default {
    components: {
        MenuButton,
        PageSitePath,
        ThemeSwitcher,
        FullScreenButton,
        NotificationButton,
        TaskButton,
        ProfileButton,
    },
    data() {
        return {
            store: useStore(),
        };
    },
    mounted() {
        this.store.setTheme();
    },
};
</script>

<template>
    <div
        class="flex justify-between text-sm items-center p-2 rounded-lg px-5 mt-2 bg-primary shadow"
    >
        <div class="flex justify-center items-center gap-x-5">
            <MenuButton />
            <PageSitePath />
        </div>
        <div class="flex justify-center items-center gap-x-14">
            <div class="flex justify-center items-center gap-x-3">
                <ThemeSwitcher />
                <FullScreenButton />
                <NotificationButton />
                <TaskButton />
            </div>
            <ProfileButton />
        </div>
    </div>
</template>
