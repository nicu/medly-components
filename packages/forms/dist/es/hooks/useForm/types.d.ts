import { DisplayFormat } from '../../components/Fields/types';
export interface Handlers {
    handleFormSubmit: (onSubmit: (values: Record<string, unknown>) => void) => (e: React.FormEvent<HTMLFormElement>) => void;
    handleFormReset: (onReset?: (e: React.FormEvent<HTMLFormElement>) => void) => (e: React.FormEvent<HTMLFormElement>) => void;
    handleFocus: (name: string, onFocus?: (e: any) => void) => (event: any) => void;
    handleTextChange: (name: string) => (event: React.FormEvent<HTMLInputElement>) => void;
    handleNumberChange: (name: string) => (event: React.FormEvent<HTMLInputElement>) => void;
    handleRadioGroupChange: (name: string) => (value: any) => void;
    handleSingleSelectChange: (name: string) => (value: any) => void;
    handleDateChange: (name: string, displayFormat: DisplayFormat) => (value: any) => void;
    handleDateRangeChange: (name: string, displayFormat: DisplayFormat) => (value: any) => void;
    handleCheckboxGroupChange: (name: string) => (values: any[]) => void;
    handleMultiSelectChange: (name: string) => (values: any[]) => void;
    handleCheckboxChange: (name: string) => (event: React.FormEvent<HTMLInputElement>) => void;
    handleFileChange: (name: string, maxSize?: number, onError?: (key: string, message: string) => void) => (files: FileList) => void;
    handleChange: (name: string, value: any) => void;
    handleRemoveField: (fieldName: string) => (name: string) => void;
    getPeriodFromDates: (startDate: string | Date, endDate: string | Date, displayFormat: DisplayFormat) => {
        startDate: Date | null;
        endDate: Date | null;
    };
}
export interface UseFormResult {
    formKey: number;
    values: {
        [K: string]: any;
    };
    handlers: Handlers;
    errorMessages: {
        [K: string]: any;
    };
    addErrorMessage: (key: string, message: string) => void;
    setValues: React.Dispatch<React.SetStateAction<Record<string, unknown>>>;
    setErrorMessages: React.Dispatch<React.SetStateAction<Record<string, unknown>>>;
}
