type Mode = 'production' | 'development'

export interface BuildPath  {
    entry: string;
    output: string;
    html: string
}

export interface BuildENV {
    port: number;
    mode: Mode;
}

export interface BuildConfig {
    mode: Mode,
    paths: BuildPath,
    isDev: boolean,
    port: number | string
}