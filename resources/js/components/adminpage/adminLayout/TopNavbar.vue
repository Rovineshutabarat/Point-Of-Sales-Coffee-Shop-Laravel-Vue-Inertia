<script>
import { useStore } from "../../../store/store.js";
import ThemeButton from "./partials/ThemeButton.vue";
import SitePath from "./partials/SitePath.vue";
import ProfileMenu from "./partials/ProfileMenu.vue";

export default {
    components: {
        ThemeButton,
        SitePath,
        ProfileMenu,
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
            <Icon
                light="https://img.icons8.com/material-sharp/24/menu--v1.png"
                dark="https://img.icons8.com/material-rounded/24/FFFFFF/menu--v1.png"
                :enableHover="true"
            />
            <SitePath />
        </div>
        <div class="flex justify-center items-center gap-x-10">
            <div class="flex justify-center items-center gap-x-2">
                <ThemeButton :handleClick="store.changeTheme" />
                <Icon
                    light="https://img.icons8.com/material-sharp/24/menu--v1.png"
                    dark="https://img.icons8.com/material-rounded/24/FFFFFF/menu--v1.png"
                    :enableHover="true"
                />
                <Icon
                    light="https://img.icons8.com/material-sharp/24/menu--v1.png"
                    dark="https://img.icons8.com/material-rounded/24/FFFFFF/menu--v1.png"
                    :enableHover="true"
                />
            </div>
            <ProfileMenu />
        </div>
    </div>
</template>
