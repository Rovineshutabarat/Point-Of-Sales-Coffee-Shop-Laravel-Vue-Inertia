<script>
import Icon from "../../../common/Icon.vue";
export default {
    components: {
        Icon,
    },
    methods: {},
};
</script>

<template>
    <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
            <div class="avatar online">
                <div class="w-9 rounded-full">
                    <img
                        src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    />
                </div>
            </div>
        </div>
        <div
            tabindex="0"
            class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-md bg-base-100 rounded-box w-52"
        >
            <div class="flex flex-col gap-y-1 items-center py-3">
                <h1 class="text-[16px] font-semibold">Rovines Hutabarat</h1>
                <h1 class="text-[13px]">Super Admin</h1>
            </div>
            <div class="flex flex-col gap-y-[2px]">
                <div
                    class="flex items-center justify-start py-1 hover:bg-primary px-2 gap-x-1 cursor-pointer text-[13px] rounded-md"
                >
                    <Icon
                        light="https://img.icons8.com/fluency-systems-regular/48/guest-male.png"
                        dark="https://img.icons8.com/fluency-systems-regular/48/FFFFFF/guest-male.png"
                        :enableHover="false"
                    />
                    <h1>My Profile</h1>
                </div>
                <div
                    class="flex items-center justify-start py-1 hover:bg-primary px-2 gap-x-1 cursor-pointer text-[13px] rounded-md"
                >
                    <Icon
                        light="https://img.icons8.com/ios/50/create-new.png"
                        dark="https://img.icons8.com/ios/50/FFFFFF/create-new.png"
                        :enableHover="false"
                    />
                    <h1>Edit Profile</h1>
                </div>
                <div
                    class="flex items-center justify-start py-1 hover:bg-primary px-2 gap-x-1 cursor-pointer text-[13px] rounded-md"
                >
                    <Icon
                        light="https://img.icons8.com/ios-glyphs/30/shutdown--v1.png"
                        dark="https://img.icons8.com/ios/50/FFFFFF/create-new.png"
                        :enableHover="false"
                    />
                    <h1>Sign Out</h1>
                </div>
            </div>
        </div>
    </div>
</template>
