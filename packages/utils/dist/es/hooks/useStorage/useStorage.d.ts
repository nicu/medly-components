import { UseStorageOptions, UseStorageSetValue } from './types';
/**
 * useStorage can be used to handle the browsers localStorage/sessionStorage/cookieStorage. Default storage is localStorage.
 *
 * @param {string} key name of the key
 * @param {UseStorageOptions<T>} [currOptions] An object that accepts type of storage and initial values
 *
 * @returns {[T, UseStorageSetValue<T>]} Array with first index as storedValue and second index as setValue function
 */
export declare const useStorage: <T>(key: string, currOptions?: UseStorageOptions<T> | undefined) => [T, UseStorageSetValue<T>];
