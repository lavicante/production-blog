import webpack from "webpack";
import { BuildConfig } from "./types/buildConfig";

export const buildResolvers = (
  options: BuildConfig
): webpack.ResolveOptions => {
  return {
    extensions: [".tsx", ".ts", ".js"],
    modules: [options.paths.src, "node_modules"],
    preferAbsolute: true,
    alias: {},
  };
};
