<script>
export default {
    data() {
        return {
            isFullScreen: false,
        };
    },
    methods: {
        toggleFullScreen() {
            if (this.isFullScreen === false) {
                document.documentElement.requestFullscreen();
            } else {
                document.exitFullscreen();
            }
            this.isFullScreen = !this.isFullScreen;
        },
    },
};
</script>

<template>
    <div
        @click="toggleFullScreen"
        class="tooltip tooltip-bottom"
        data-tip="Fullscreen"
    >
        <Icon
            tabindex="0"
            role="button"
            light="https://img.icons8.com/ios/50/fit-to-width.png"
            dark="https://img.icons8.com/ios/50/FFFFFF/fit-to-width.png"
            :enableHover="true"
        />
    </div>
</template>
