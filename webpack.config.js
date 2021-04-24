const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader", // 3. Injects styles into DOM
          "css-loader", // 2. Turn CSS into plain JS
          "sass-loader", // 1. Turns SCSS into normal CSS
        ],
      },
    ],
  },
};
