import { DefaultSelected, Option } from './types';
export declare const getDefaultSelectedOption: (options: Option[], defaultSelected: any) => Option;
export declare const getUpdatedOptions: (options: Option[], selected: DefaultSelected | Option, key?: 'selected' | 'hovered') => Option[];
export declare const filterOptions: (options: Option[], str: string) => Option[];
export declare const getNextOption: (selectedOption: Option, options: Option[]) => Option;
export declare const getPrevOption: (selectedOption: Option, options: Option[]) => Option;
