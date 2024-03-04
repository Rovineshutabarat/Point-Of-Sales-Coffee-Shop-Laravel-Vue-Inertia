<script setup>
import { ref, watch } from "vue";

const lightImages = "https://img.icons8.com/material-sharp/24/menu--v1.png";
const darkImages =
    "https://img.icons8.com/material-rounded/24/FFFFFF/menu--v1.png";

const checkCurrentTheme = ref(""); // Membuat variabel reaktif
</script>

<template>
    <div class="p-2 hover:bg-base-100 rounded-full cursor-pointer">
        <img :src="checkCurrentTheme" alt="" class="h-5 w-5" />
    </div>
</template>
