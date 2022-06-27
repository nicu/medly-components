import { Result } from './types';
/**
 * A hook that provides abstraction over common axios functions
 *
 * @returns {Result<Data, Error>} An object with data, response, request, isLoading and error
 */
export declare const useAxios: <Data = any, Error_1 = {
    message: string;
    variant: 'error';
}>() => Result<Data, Error_1>;
