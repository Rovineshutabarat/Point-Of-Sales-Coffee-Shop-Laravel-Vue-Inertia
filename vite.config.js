import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import vue3 from "@vitejs/plugin-vue";

export default defineConfig({
    plugins: [
        vue3(),
        laravel({
            input: ["resources/css/app.css", "resources/js/app.js"],
            refresh: true,
        }),
    ],
});
