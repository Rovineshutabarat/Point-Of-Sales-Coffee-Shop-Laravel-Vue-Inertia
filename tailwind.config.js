/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],
    theme: {
        extend: {
            colors: {
                primary: "rgba(var(--primary))",
                secondary: "rgba(var(--secondary))",
                accent: "rgba(var(--accent))",
                neutral: "rgba(var(--neutral))",
                "base-100": "rgba(var(--base-100))",
                "base-200": "rgba(var(--text-color))",
            },
        },
    },
    darkMode: "class",
    plugins: [require("daisyui")],
};
