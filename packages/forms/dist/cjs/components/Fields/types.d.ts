import { Checkbox, CheckboxGroup, DatePicker, DateRangePicker, FileInput, MultiSelect, Radio, RadioGroup, SingleSelect, TextField } from '@medly-components/core';
import { GetComponentProps } from '@medly-components/utils';
import { HTMLProps } from 'react';
import { Handlers } from '../../hooks/useForm/types';
export declare type CommonFieldProps = {
    /** Grid column to render the field */
    gridColumn?: string;
    /** Grid row to render the field */
    gridRow?: string;
};
export declare type FormCustomComponent<P = unknown> = React.FC<P & {
    /** Name of the field */
    name: string;
    /** Current value of the field */
    value: any;
    /** On change handler of the field */
    onChange: (name: string, value: any) => void;
    /** This function can be called to remove value from current state */
    onRemoveField: (fieldName: string) => void;
    /** Current values of all the fields */
    values: {
        [key: string]: any;
    };
    /** This will be set true when it is passed to form */
    disabled: boolean;
    /** This will be set true when it is passed to form */
    showDecorators: boolean;
    /** This will be present if errorMessages passed to form contains error message with key as name of this field  */
    errorText?: string;
    /** This will be passed from form props */
    variant: string;
}>;
export declare type TextFieldProps = GetComponentProps<typeof TextField> & CommonFieldProps & {
    type: HTMLProps<HTMLInputElement>['type'];
};
export declare type SingleSelectProps = GetComponentProps<typeof SingleSelect> & CommonFieldProps & {
    type: 'single-select';
};
export declare type MultiSelectProps = GetComponentProps<typeof MultiSelect> & CommonFieldProps & {
    type: 'multi-select';
};
export declare type CheckboxProps = GetComponentProps<typeof Checkbox> & CommonFieldProps & {
    type: 'checkbox';
};
export declare type CheckboxGroupProps = GetComponentProps<typeof CheckboxGroup> & CommonFieldProps & {
    type: 'checkbox-group';
};
export declare type RadioProps = GetComponentProps<typeof Radio> & {
    type: 'radio';
};
export declare type RadioGroupProps = GetComponentProps<typeof RadioGroup> & CommonFieldProps & {
    type: 'radio-group';
};
export declare type DatePickerProps = GetComponentProps<typeof DatePicker> & CommonFieldProps & {
    type: 'date';
};
export declare type DateRangePickerProps = GetComponentProps<typeof DateRangePicker> & {
    type: 'date-range';
    displayFormat?: DatePickerProps['displayFormat'];
};
export declare type FileInputProps = GetComponentProps<typeof FileInput> & CommonFieldProps & {
    type: 'file';
    multiple?: boolean;
    maxSize?: number;
    accept?: string;
};
export declare type CustomFieldProps = {
    component: FormCustomComponent<any>;
    [k: string]: any;
} & CommonFieldProps & {
    type: 'custom';
};
export declare type NestedProps = {
    /** Type to identify field type */
    type: 'nested';
    /** Nested Fields */
    fields: {
        [key: string]: FormFieldProperties;
    };
    /** Header for field group */
    header?: string;
    /** Helper text for field group */
    helperText?: string;
    /** This will be handled internally */
    disabled?: boolean;
};
export declare type DisplayFormat = DatePickerProps['displayFormat'];
export declare type FormFieldProperties = TextFieldProps | FileInputProps | SingleSelectProps | MultiSelectProps | CheckboxProps | CheckboxGroupProps | RadioProps | RadioGroupProps | DatePickerProps | DateRangePickerProps | NestedProps | CustomFieldProps;
export interface FieldsProps {
    values: {
        [key: string]: any;
    };
    handlers: Handlers;
    fields?: {
        [key: string]: FormFieldProperties;
    };
    parentName?: string;
    disabled?: boolean;
    errorMessages?: {
        [K: string]: any;
    };
    addErrorMessage: (key: string, message: string) => void;
    /** Show prefix, suffix, and character count elements. If set to false, only the input, label, and helper-text icon will be rendered. */
    showDecorators?: boolean;
    /** Input Variants */
    variant?: 'outlined' | 'filled' | 'fusion';
}
