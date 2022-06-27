import { AxiosRequestConfig, AxiosResponse } from 'axios';
export declare type Result<Data = any, Error = any> = {
    data?: Data;
    isLoading: boolean;
    response?: AxiosResponse<Data>;
    error?: AxiosResponse<Error>;
    request: (param: AxiosRequestConfig & {
        onSuccess?: (response?: AxiosResponse<Data>) => void;
        onError?: (error?: AxiosResponse<Error>) => void;
    }) => Promise<{
        response?: AxiosResponse<Data>;
        error?: AxiosResponse<Error>;
    }>;
    clear: () => void;
};
