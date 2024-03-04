<script>
import SideNavbar from "../Components/Generic/AdminLayoutComponent/SideNavbar.vue";
import TopNavbar from "../Components/Generic/AdminLayoutComponent/TopNavbar.vue";

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
