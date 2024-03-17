<script>
import themeProvider from "./theme-provider.vue";
import sideNavbar from "../components/adminpage/navigation/side-navbar.vue";
import topNavbar from "../components/adminpage/navigation/top-navbar.vue";
import header from "../components/adminpage/navigation/header.vue";

export default {
    components: {
        "theme-provider": themeProvider,
        "side-navbar": sideNavbar,
        "top-navbar": topNavbar,
        headers: header,
    },
    data() {
        return {};
    },
};
</script>

<template>
    <theme-provider>
        <section class="flex">
            <side-navbar />
            <section class="ml-72 flex-1">
                <div class="mx-5">
                    <top-navbar />
                    <div class="ml-2 mb-10 flex flex-col gap-y-5">
                        <headers />
                        <slot />
                    </div>
                </div>
            </section>
        </section>
    </theme-provider>
</template>
