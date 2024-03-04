import { defineStore } from "pinia";

export const useStore = defineStore("store", {
    state: () => {
        return {
            theme:
                localStorage.getItem("theme") === "light" ||
                localStorage.getItem("theme") === "dark"
                    ? localStorage.getItem("theme")
                    : "light",
        };
    },
    actions: {
        setTheme() {
            document.documentElement.setAttribute(
                "data-theme",
                localStorage.getItem("theme")
            );
        },
        changeTheme() {
            this.theme = this.theme === "light" ? "dark" : "light";
            localStorage.setItem("theme", this.theme);
            this.setTheme();
        },
    },
});
