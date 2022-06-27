import { ToastProps } from '../Toast/types';
export declare type Toast = ToastProps & {
    /** Time after which toast will automatically removed */
    timer?: number;
};
export declare const addToast: import("effector").Event<Omit<Toast, "id">>;
export declare const removeToast: import("effector").Event<number>;
export declare const removeAllToasts: import("effector").Event<void>;
export declare const toastStore: import("effector").Store<Toast[]>;
