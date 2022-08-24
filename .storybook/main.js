// const path = require("path")

module.exports = {
    stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
        "@storybook/preset-create-react-app",
        // {
        //     name: "@storybook/addon-postcss",
        //     options: {
        //         postcssLoaderOptions: {
        //             implementation: require("postcss"),
        //         },
        //     },
        // },
    ],
    framework: "@storybook/react",
    core: {
        builder: "@storybook/builder-webpack5",
    },
    // webpackFinal: async (config) => {
    //     config.module.rules.push({
    //         test: /\.css$/,
    //         use: [
    //             {
    //                 loader: "postcss-loader",
    //                 options: {
    //                     plugins: [require("tailwindcss", "autoprefixer")],
    //                 },
    //             },
    //         ],
    //         include: path.resolve(__dirname, "../"),
    //     })
    //     return config
    // },
}

// module.exports = {
//     stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
//     addons: [
//         "@storybook/addon-links",
//         "@storybook/addon-essentials",
//         "@storybook/addon-interactions",
//         {
//             name: "@storybook/addon-postcss",
//             options: {
//                 postcssLoaderOptions: {
//                     implementation: require("postcss"),
//                 },
//             },
//         },
//     ],
//     webpackFinal: async (config) => {
//         config.module.rules.push({
//             test: /\.css$/,
//             use: [
//                 {
//                     loader: "postcss-loader",
//                     options: {
//                         plugins: [require("tailwindcss", "autoprefixer")],
//                     },
//                 },
//             ],
//             include: path.resolve(__dirname, "../"),
//         })
//         return config
//     },
//     framework: "@storybook/react",
//     core: {
//         builder: "webpack5",
//     },
//     features: {
//         storyStoreV7: true,
//     },
// }
