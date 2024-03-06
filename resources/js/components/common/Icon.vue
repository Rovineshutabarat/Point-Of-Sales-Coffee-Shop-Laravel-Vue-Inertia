<script>
import { useStore } from "../../store/store.js";
export default {
    data() {
        return {
            store: useStore(),
        };
    },
    props: {
        light: String,
        dark: String,
        enableHover: Boolean || false,
        customClass: String || "",
    },
    computed: {
        setImages() {
            const currentTheme = this.store.theme;
            if (currentTheme === "light") {
                return this.light;
            } else {
                return this.dark;
            }
        },
    },
};
</script>

<template>
    <div
        v-if="enableHover"
        class="p-2 hover:bg-base-100 rounded-full cursor-pointer"
    >
        <img :src="setImages" alt="" class="h-5 w-5" />
    </div>
    <img v-else :src="setImages" alt="" class="h-5 w-5" :class="customClass" />
</template>
