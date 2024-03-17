<script>
import adminLayout from "../../layouts/admin-layout.vue";
import { useStore } from "../../store/store.js";
import card from "../../components/adminpage/dashboard/card.vue";

export default {
    components: {
        adminLayout,
        card,
    },
    data() {
        return {
            store: useStore(),
        };
    },
};
</script>

<template>
    <adminLayout>
        <card />
    </adminLayout>
</template>
