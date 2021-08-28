const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const StylelintPlugin = require("stylelint-webpack-plugin");

module.exports = {
  webpack(config, env) {
    if (env === "development") {
      const files = "./src/**/*.{ts,tsx}";
      config.plugins = config.plugins
        .filter((plugin) => plugin.constructor.name !== "FriendlyErrorsWebpackPlugin")
        .concat([new ForkTsCheckerWebpackPlugin({ eslint: { files } }), new StylelintPlugin({ files })]);
    }

    return config;
  },
};
