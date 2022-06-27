import { WithThemeProp } from '@medly-components/utils';
import { SelectorLabelPositionStyleProps, SelectorLabelProps } from './types';
export declare const SelectorGroupWrapper: import("styled-components").StyledComponent<"div", any, import("@medly-components/utils").HTMLProps<HTMLDivElement> & {
    fullWidth?: boolean | undefined;
    disabled?: boolean | undefined;
    required?: boolean | undefined;
    hasHelperOrErrorText?: boolean | undefined;
    type: "checkbox" | "radio";
}, never>;
export declare const asterisk: ({ hasError, theme, type }: SelectorLabelProps & WithThemeProp) => import("styled-components").FlattenSimpleInterpolation;
export declare const SelectorLabel: import("styled-components").StyledComponent<import("react").FC<import("../..").TextProps> & import("@medly-components/utils").WithStyle, any, import("../..").TextProps & {
    hasError?: boolean | undefined;
    type: "checkbox" | "radio";
    labelPosition?: import("./types").SelectorLabelPositions | undefined;
}, never>;
export declare const SelectorGroupOptions: import("styled-components").StyledComponent<"div", any, import("@medly-components/utils").HTMLProps<HTMLDivElement> & {
    columns?: number | undefined;
    isIndented?: boolean | undefined;
    fullWidthOptions?: boolean | undefined;
}, never>;
export declare const SelectorHelperText: import("styled-components").StyledComponent<"span", any, import("../..").TextProps & {
    hasError?: boolean | undefined;
    isIndented?: boolean | undefined;
    disabled?: boolean | undefined;
    type: "checkbox" | "radio";
}, never>;
export declare const getSelectorLabelPositionStyle: ({ labelPosition, fullWidth }: SelectorLabelPositionStyleProps) => import("styled-components").FlattenSimpleInterpolation;
export declare const SelectorGroup: {
    Wrapper: import("styled-components").StyledComponent<"div", any, import("@medly-components/utils").HTMLProps<HTMLDivElement> & {
        fullWidth?: boolean | undefined;
        disabled?: boolean | undefined;
        required?: boolean | undefined;
        hasHelperOrErrorText?: boolean | undefined;
        type: "checkbox" | "radio";
    }, never>;
    Label: import("styled-components").StyledComponent<import("react").FC<import("../..").TextProps> & import("@medly-components/utils").WithStyle, any, import("../..").TextProps & {
        hasError?: boolean | undefined;
        type: "checkbox" | "radio";
        labelPosition?: import("./types").SelectorLabelPositions | undefined;
    }, never>;
    HelperText: import("styled-components").StyledComponent<"span", any, import("../..").TextProps & {
        hasError?: boolean | undefined;
        isIndented?: boolean | undefined;
        disabled?: boolean | undefined;
        type: "checkbox" | "radio";
    }, never>;
    Options: import("styled-components").StyledComponent<"div", any, import("@medly-components/utils").HTMLProps<HTMLDivElement> & {
        columns?: number | undefined;
        isIndented?: boolean | undefined;
        fullWidthOptions?: boolean | undefined;
    }, never>;
};
