import { GetComponentProps, HTMLProps } from '@medly-components/utils';
import Text from '../Text';
export declare type SelectorGroupWrapperProps = HTMLProps<HTMLDivElement> & {
    fullWidth?: boolean;
    disabled?: boolean;
    required?: boolean;
    hasHelperOrErrorText?: boolean;
    type: 'radio' | 'checkbox';
};
export declare type SelectorGroupOptionsProps = HTMLProps<HTMLDivElement> & {
    columns?: number;
    isIndented?: boolean;
    fullWidthOptions?: boolean;
};
export declare type SelectorHelperTextProps = GetComponentProps<typeof Text> & {
    hasError?: boolean;
    isIndented?: boolean;
    disabled?: boolean;
    type: 'radio' | 'checkbox';
};
export declare type SelectorLabelPositions = 'left' | 'right' | 'top' | 'bottom';
export declare type SelectorLabelProps = GetComponentProps<typeof Text> & {
    hasError?: boolean;
    type: 'radio' | 'checkbox';
    labelPosition?: SelectorLabelPositions;
};
export declare type SelectorLabelPositionStyleProps = {
    fullWidth?: boolean;
    labelPosition?: SelectorLabelPositions;
};
