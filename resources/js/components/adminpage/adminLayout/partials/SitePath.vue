<script>
export default {
    data() {
        return {
            currentPath: this.$page.url.split("/").filter(Boolean),
        };
    },
};
</script>

<template>
    <div class="text-sm breadcrumbs">
        <ul>
            <li>{{ currentPath[0] }}</li>
            <li>{{ currentPath[1] }}</li>
        </ul>
    </div>
</template>
