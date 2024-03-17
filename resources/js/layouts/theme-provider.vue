<script>
import { useStore } from "../store/store.js";
export default {
    data() {
        return {
            store: useStore(),
        };
    },
    mounted() {},
};
</script>

<template>
    <div :class="store.theme" class="bg-base-100 text-base-200">
        <slot />
    </div>
</template>
