import { WithThemeProp } from '@medly-components/utils';
export declare const OuterWrapper: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const HelperText: import("styled-components").StyledComponent<"span", any, {
    isError?: boolean | undefined;
    disabled?: boolean | undefined;
}, never>;
export declare const Suffix: import("styled-components").StyledComponent<import("react").FunctionComponent<import("@medly-components/utils/dist/es/components/InjectClassName/types").Props>, any, {
    areOptionsVisible?: boolean | undefined;
}, never>;
export declare const FlatVariantStyled: import("styled-components").StyledComponent<"button", any, {
    type: "button";
} & Omit<import("./types").FlatVariantProps, "value"> & WithThemeProp, "type">;
