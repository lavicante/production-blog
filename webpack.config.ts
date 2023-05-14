import path from "path";
import {buildConfig} from "./config/webpack/buildConfig";
import {BuildPath} from "./config/webpack/types/buildConfig";

const paths: BuildPath = {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    output: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html')
}

const mode = 'development'
const isDev = mode === 'development'

const config = buildConfig({
    mode: 'development',
    paths,
    isDev
})

export default config