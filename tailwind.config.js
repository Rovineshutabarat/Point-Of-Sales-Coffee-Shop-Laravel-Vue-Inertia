/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],
    theme: {
        extend: {},
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: [
            {
                light: {
                    ...require("daisyui/src/theming/themes")["light"],
                    primary: "#F3F5F6",
                    secondary: "#20C71E",
                    accent: "#C8ECCA",
                    neutral: "#050505",
                    "base-100": "#F8FAFB",
                },
                dark: {
                    ...require("daisyui/src/theming/themes")["forest"],
                    primary: "#151515",
                    secondary: "#1BA019",
                    accent: "#151C15",
                    neutral: "#050505",
                    "base-100": "#050505",
                },
            },
        ],
    },
};
