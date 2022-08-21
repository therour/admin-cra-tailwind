/* eslint-disable @typescript-eslint/no-var-requires */
const colors = require("tailwindcss/colors")

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{ts,tsx,js,jsx}"],
    theme: {
        extend: {
            colors: {
                primary: colors.blue,
                danger: colors.red,
                gray: colors.slate,
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
}
