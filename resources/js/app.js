import axios from "axios";
import { createApp, h } from "vue";
import { Link, createInertiaApp } from "@inertiajs/vue3";
import { createPinia } from "pinia";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

const pinia = createPinia();

createInertiaApp({
    resolve: (name) => {
        const pages = import.meta.glob("./Pages/**/*.vue", { eager: true });
        return pages[`./Pages/${name}.vue`];
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(Toast, {
                timeout: 3000,
                showCloseButtonOnHover: true,
            })
            .component("Link", Link)
            .use(pinia)
            .use(plugin)
            .mount(el);
    },
    progress: {
        showSpinner: true,
        color: "lime",
    },
});

window.axios = axios;
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
