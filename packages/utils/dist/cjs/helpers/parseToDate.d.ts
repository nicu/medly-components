declare type DisplayFormat = 'dd/MM/yyyy' | 'dd/yyyy/MM' | 'MM/dd/yyyy' | 'MM/yyyy/dd' | 'yyyy/dd/MM' | 'yyyy/MM/dd' | 'dd-MM-yyyy' | 'dd-yyyy-MM' | 'MM-dd-yyyy' | 'MM-yyyy-dd' | 'yyyy-dd-MM' | 'yyyy-MM-dd';
export declare const parseToDate: (initialState: string, displayFormat: DisplayFormat) => Date;
export {};
