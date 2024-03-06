<script>
export default {
    data() {
        return {
            url: {
                dashboard: "/adminpage/dashboard",
                product: "/adminpage/product",
            },
        };
    },
    computed: {
        activeMenu() {
            return (currentUrl) => ({
                "bg-[#191919]": this.$page.url === currentUrl,
                "hover:bg-[#191919]": this.$page.url === currentUrl,
                "hover:bg-[#0f0f0f]": this.$page.url !== currentUrl,
            });
        },
    },
};
</script>

<template>
    <div class="fixed bg-neutral w-72 h-full text-white">
        <div class="flex justify-center items-center gap-x-2 my-5">
            <img
                src="https://img.icons8.com/ios-glyphs/30/FFFFFF/amazon-alexa-logo.png"
                alt="Logo.png"
                class="h-9 w-9"
            />
            <h1 class="text-2xl font-medium">PROOKED</h1>
        </div>
        <div class="flex flex-col mt-5 mx-5">
            <h1 class="text-[13px] font-extralight mb-2">Product</h1>
            <div class="flex flex-col gap-y-1">
                <Link
                    href="dashboard"
                    :class="activeMenu(url.dashboard)"
                    class="flex items-center gap-x-2 px-4 py-3 rounded-3xl cursor-pointer"
                >
                    <img
                        src="https://img.icons8.com/fluency-systems-filled/48/FFFFFF/home.png"
                        alt=""
                        class="h-5 w-5"
                    />
                    <h1 class="text-[14px] font-extralight">Dashboard</h1>
                </Link>
                <Link
                    href="product"
                    :class="activeMenu(url.product)"
                    class="flex items-center gap-x-2 px-4 py-3 rounded-3xl cursor-pointer"
                >
                    <img
                        src="https://img.icons8.com/glyph-neue/64/FFFFFF/product.png"
                        alt=""
                        class="h-5 w-5"
                    />
                    <h1 class="text-[14px] font-extralight">Product</h1>
                </Link>
            </div>
        </div>
    </div>
</template>
