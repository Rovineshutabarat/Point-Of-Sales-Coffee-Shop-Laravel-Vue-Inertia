<script>
export default {
    data() {
        return {
            currentURL: this.$page.url.split("/").filter(Boolean),
        };
    },
};
</script>

<template>
    <div>
        <h1 class="text-2xl font-semibold mt-8">{{ currentURL[1] }}</h1>
        <div class="text-[13px] breadcrumbs">
            <ul>
                <li>{{ currentURL[0] }}</li>
                <li>{{ currentURL[1] }}</li>
            </ul>
        </div>
    </div>
</template>
