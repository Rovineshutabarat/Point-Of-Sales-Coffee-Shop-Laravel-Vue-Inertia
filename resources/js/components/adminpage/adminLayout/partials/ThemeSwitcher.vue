<script>
import { useStore } from "../../../../store/store";

export default {
    props: {
        onClick: Function,
    },
    data() {
        return {
            store: useStore(),
        };
    },
};
</script>

<template>
    <div
        class="p-2 hover:bg-base-100 rounded-full flex justify-center items-center tooltip tooltip-bottom"
        data-tip="Change Theme"
    >
        <label class="swap" @click.prevent="store.changeTheme">
            <input type="checkbox" />
            <Icon
                light="https://img.icons8.com/ios/50/sun--v1.png"
                dark="https://img.icons8.com/ios/50/FFFFFF/do-not-disturb-2.png"
                :enableHover="false"
                customClass="h-6 w-6 swap-off"
            />
        </label>
    </div>
</template>
