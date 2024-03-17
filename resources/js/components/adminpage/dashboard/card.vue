<script>
import cardIcon from "./partials/card-icon.vue";
export default {
    components: {
        "card-icon": cardIcon,
    },
};
</script>
<template>
    <div class="grid grid-cols-4 gap-x-5">
        <div class="bg-primary rounded-2xl shadow-md p-5 gap-y-2 flex flex-col">
            <h1 class="text-sm">Total Revenue</h1>
            <div class="flex justify-between items-center">
                <h1 class="text-[18px] font-semibold">Rp.248.500</h1>
                <card-icon />
            </div>
        </div>
        <div class="bg-primary rounded-2xl shadow-md p-5 gap-y-2 flex flex-col">
            <h1 class="text-sm">Total Revenue</h1>
            <div class="flex justify-between items-center">
                <h1 class="text-[18px] font-semibold">Rp.248.500</h1>
                <card-icon />
            </div>
        </div>
        <div class="bg-primary rounded-2xl shadow-md p-5 gap-y-2 flex flex-col">
            <h1 class="text-sm">Total Revenue</h1>
            <div class="flex justify-between items-center">
                <h1 class="text-[18px] font-semibold">Rp.248.500</h1>
                <card-icon />
            </div>
        </div>
        <div class="bg-primary rounded-2xl shadow-md p-5 gap-y-2 flex flex-col">
            <h1 class="text-sm">Total Revenue</h1>
            <div class="flex justify-between items-center">
                <h1 class="text-[18px] font-semibold">Rp.248.500</h1>
                <card-icon />
            </div>
        </div>
    </div>
</template>
