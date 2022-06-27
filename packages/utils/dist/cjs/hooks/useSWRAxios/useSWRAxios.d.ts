import { AxiosConfig, Return, SWRConfig } from './types';
/**
 * This react hook can be used to call the api using SWR and axios. SWR helps to cache the data. With SWR, components will get a stream of data updates constantly and automatically. And the UI will be always fast and reactive.
 *
 * @param {string | AxiosConfig} config can be either url or AxiosRequestConfig
 * @param {SWRConfig<Data, Error>} SWRConfig SWR config
 *
 * @returns {Return<Data, Error>} An object with data, response, request, isLoading and error
 */
export declare const useSWRAxios: <Data = unknown, Error_1 = unknown>(config: string | AxiosConfig, { initialData, ...swrConfig }?: SWRConfig<Data, Error_1>) => Return<Data, Error_1>;
