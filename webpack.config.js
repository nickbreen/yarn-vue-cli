module.exports = {
    module: {
        rules: [{
            loader: "babel-loader",
            options: {
                rootMode: "upward",
            }
        }]
    },
}