import { Option } from './types';
export declare const getInputValue: (selectedOptions: Option[]) => string;
export declare const getDefaultSelectedOptions: (options: Option[], defaultValues: any[]) => any[];
export declare const filterOptions: (options: Option[], str: string) => Option[];
