import { RadioProps } from './types';
export declare const StyledRadio: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const HiddenRadio: import("styled-components").StyledComponent<"input", any, any, string | number | symbol>;
export declare const RadioWrapper: import("styled-components").StyledComponent<"div", any, import("@medly-components/utils").Omit<import("@medly-components/utils").HTMLProps<HTMLDivElement>, "size"> & import("@medly-components/utils").Omit<RadioProps, "value"> & {
    isActive?: boolean | undefined;
}, never>;
export declare const RadioWithLabelWrapper: import("styled-components").StyledComponent<"label", any, any, string | number | symbol>;
