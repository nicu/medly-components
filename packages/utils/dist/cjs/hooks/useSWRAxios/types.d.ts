import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { SWRConfiguration, SWRResponse } from 'swr';
export declare type AxiosConfig = AxiosRequestConfig & {
    url: string;
};
export declare type Return<Data = unknown, Error = unknown> = Omit<SWRResponse<AxiosResponse<Data>, AxiosError<Error>>, 'data' | 'error'> & {
    data?: Data;
    response?: AxiosResponse<Data>;
    error?: AxiosResponse<Error>;
};
export declare type SWRConfig<Data = unknown, Error = unknown> = Omit<SWRConfiguration<AxiosResponse<Data>, AxiosError<Error>>, 'initialData'> & {
    initialData?: Data;
};
