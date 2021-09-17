const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const StylelintPlugin = require("stylelint-webpack-plugin");

module.exports = {
  webpack(config, env) {
    if (env === "development") {
      config.plugins = config.plugins
        .filter((plugin) => plugin.constructor.name !== "FriendlyErrorsWebpackPlugin")
        .concat([new ForkTsCheckerWebpackPlugin({ eslint: { files: "./src/**/*.{ts,tsx}" } }), new StylelintPlugin({ files: "./src/**/*.{scss,css}" })]);
    }

    return config;
  },
};
