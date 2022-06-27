import { FormCustomComponent } from '../../Fields/types';
declare type AddPhoneNumberProps = {
    fields: {
        [key: string]: any;
    }[];
    setFields: (data: any) => void;
};
export declare const AddPhoneNumber: FormCustomComponent<AddPhoneNumberProps>;
export {};
