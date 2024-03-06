<script>
export default {
    props: {
        handleClick: Function,
    },
};
</script>

<template>
    <div
        class="p-2 hover:bg-base-100 rounded-full flex justify-center items-center"
    >
        <label class="swap" @click.prevent="handleClick">
            <input type="checkbox" />
            <Icon
                light="https://img.icons8.com/ios/50/sun--v1.png"
                dark="https://img.icons8.com/ios/50/FFFFFF/sun--v1.png"
                :enableHover="false"
                customClass="h-6 w-6 swap-off"
            />
            <Icon
                light="https://img.icons8.com/ios/50/crescent-moon.png"
                dark="https://img.icons8.com/ios/50/FFFFFF/crescent-moon.png"
                :enableHover="false"
                customClass="h-6 w-6 swap-on"
            />
        </label>
    </div>
</template>
