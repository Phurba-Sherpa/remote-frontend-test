
type IConfig = {
    __BASE_URL__: string,
    __DEFAULT_LAT__: number,
    __DEFAULT_LONG__: number
    __DEFAULT_ZOOM__: number
}

export const CONFIG: IConfig = {
    __BASE_URL__: import.meta.env.VITE_BASE_URL,
    __DEFAULT_LAT__: import.meta.env.VITE_DEFAULT_LAT,
    __DEFAULT_LONG__: import.meta.env.VITE_DEFAULT_LONG,
    __DEFAULT_ZOOM__: import.meta.env.VITE_DEFAULT_ZOOM
}