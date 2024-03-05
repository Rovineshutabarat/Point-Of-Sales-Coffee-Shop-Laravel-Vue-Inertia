<script setup>
import { useStore } from "../../../Store/store";
import { defineProps, computed } from "vue";

const store = useStore();
const currentTheme = computed(() => store.theme);

const props = defineProps({
    lightThemeImages: String,
    darkThemeImages: String,
});

const setImages = computed(() => {
    if (currentTheme.value === "light") {
        return props.lightThemeImages;
    } else {
        return props.darkThemeImages;
    }
});
</script>

<template>
    <div class="p-2 hover:bg-base-100 rounded-full cursor-pointer">
        <img :src="setImages" alt="" class="h-5 w-5" />
    </div>
</template>
