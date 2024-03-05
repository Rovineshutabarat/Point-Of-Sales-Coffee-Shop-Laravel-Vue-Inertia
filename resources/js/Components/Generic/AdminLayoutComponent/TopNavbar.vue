<script setup>
import Images from "../Common/Images.vue";
import { useStore } from "../../../Store/store.js";

const store = useStore();
store.setTheme();
</script>

<template>
    <div
        class="flex justify-between text-sm items-center p-2 rounded-lg px-5 mt-2 bg-primary shadow"
    >
        <Images
            lightThemeImages="https://img.icons8.com/material-sharp/24/menu--v1.png"
            darkThemeImages="https://img.icons8.com/material-rounded/24/FFFFFF/menu--v1.png"
        />
        <Images
            lightThemeImages="https://img.icons8.com/ios/50/domain--v1.png"
            darkThemeImages="https://img.icons8.com/ios/50/FFFFFF/domain--v1.png"
        />
        <button v-on:click="store.changeTheme">Change Themes</button>
    </div>
</template>
