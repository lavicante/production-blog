import path from "path";
import { buildConfig } from "./config/webpack/buildConfig";
import { BuildENV, BuildPath } from "./config/webpack/types/buildConfig";

export default (env: BuildENV) => {
  const paths: BuildPath = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    output: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
    src: path.resolve(__dirname, "src"),
  };

  const mode = env.mode || "development";
  const isDev = mode === "development";
  const PORT = env.port || 5000;

  return buildConfig({
    mode,
    paths,
    isDev,
    port: PORT,
  });
};
