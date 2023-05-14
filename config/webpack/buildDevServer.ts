import { BuildConfig } from "./types/buildConfig";
import type { Configuration as DevServerConfig } from "webpack-dev-server";

export const buildDevServer = (options: BuildConfig): DevServerConfig => {
  const { port } = options;
  return {
    port,
    open: true,
  };
};
