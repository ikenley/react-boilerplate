const path = require("path");

module.exports = function(env, argv) {
  const isProd = env && env.prod;
  return {
    mode: isProd ? "production" : "development",
    devtool: isProd ? false : "source-map",
    entry: "./src/index.js",
    output: {
      filename: "main.js",
      path: path.resolve(__dirname, "dist")
    },
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"]
            }
          }
        }
      ]
    },
    devServer: { hot: true }
  };
};
