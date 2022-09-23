// module.exports = {   // export default
export default {
    entry: ["@babel/polyfill", "./html/btnfn.js"],
    output: {
        path: "E:/AI/220702 fullstack/jsbasic/dist/js",
        filename: "bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
        ],
    },

    devtool: "source-map",
    mode: "development",
};
