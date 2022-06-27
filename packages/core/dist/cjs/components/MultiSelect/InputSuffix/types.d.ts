import { MultiSelectProps } from '../types';
export declare type InputSuffixProps = {
    id: string;
    size: 'S' | 'M';
    variant: Required<MultiSelectProps>['variant'];
    disabled?: boolean;
    isActive?: boolean;
    hasError?: boolean;
    onClear: () => void;
    optionsCount: number;
    hideClearIcon?: boolean;
};
