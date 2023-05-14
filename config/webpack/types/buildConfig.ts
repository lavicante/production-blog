type Mode = 'production' | 'development'

export interface BuildPath  {
    entry: string;
    output: string;
    html: string
}

export interface BuildConfig {
    mode: Mode,
    paths: BuildPath,
    isDev: boolean
}