import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import {BuildConfig} from "./types/buildConfig";

export const buildPlugins = ({paths}: BuildConfig): webpack.WebpackPluginInstance[] => {
    return [
        new HtmlWebpackPlugin({ template: paths.html }),
        new webpack.ProgressPlugin(),
    ]
}