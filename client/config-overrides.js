/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const StylelintPlugin = require("stylelint-webpack-plugin");

module.exports = {
  webpack(config, env) {
    if (env === "development") {
      config.plugins = config.plugins.concat([
        new ForkTsCheckerWebpackPlugin({ eslint: { files: "./src/**/*.{ts,tsx}" } }),
        new StylelintPlugin({ files: "./src/**/*.{scss,css}" }),
      ]);
    }

    return config;
  },
};
