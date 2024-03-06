<script>
import SideNavbar from "../components/adminpage/adminLayout/SideNavbar.vue";
import TopNavbar from "../components/adminpage/adminLayout/TopNavbar.vue";

export default {
    components: { SideNavbar, TopNavbar },
};
</script>

<template>
    <section class="flex">
        <SideNavbar />
        <section class="ml-72 flex-1">
            <div class="mx-5">
                <TopNavbar />
                <slot />
            </div>
        </section>
    </section>
</template>
