import { Dispatch, SetStateAction } from 'react';
export declare type UseStorageSetValue<T> = Dispatch<SetStateAction<T>>;
export declare type UseStorageOptions<T> = {
    storage?: 'localStorage' | 'sessionStorage' | 'cookieStorage';
    initialValue?: T;
};
