<script>
import SideNavbar from "../Components/Adminpage/Dashboard/Side.Navbar.vue";
import TopNavbar from "../Components/Adminpage/Dashboard/Top.Navbar.vue";

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
