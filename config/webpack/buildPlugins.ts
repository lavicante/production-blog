import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import { BuildConfig } from "./types/buildConfig";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const buildPlugins = ({
  paths,
}: BuildConfig): webpack.WebpackPluginInstance[] => {
  return [
    new HtmlWebpackPlugin({ template: paths.html }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),
  ];
};
