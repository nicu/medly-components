import { ChangeEvent, FormEvent } from 'react';
import { Props } from './types';
export declare const useDateRangeTextFieldsHandlers: (props: Props) => {
    mask: string;
    builtInErrorMessage: string;
    startDateText: string;
    endDateText: string;
    startDateMaskLabel: string;
    endDateMaskLabel: string;
    isErrorPresent: boolean;
    stopPropagation: (event: React.MouseEvent) => void;
    onIconClick: (event: any) => void;
    onTextFieldFocus: (event: React.FocusEvent<HTMLInputElement>) => void;
    handleTextChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    validateOnTextFieldBlur: (event: FormEvent<HTMLInputElement>) => void;
    validateOnTextFieldInvalid: (event: ChangeEvent<HTMLInputElement>) => void;
    validateOnWrapperBlur: (event: ChangeEvent<HTMLInputElement>) => void;
};
