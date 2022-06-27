import { StyledTabListProps } from './types';
export declare const TabList: import("styled-components").StyledComponent<"div", any, import("@medly-components/utils").HTMLProps<HTMLDivElement> & import("@medly-components/utils").WithThemeProp & {
    tabSize: import("../types").TabSize;
    variant: import("../types").Variant;
}, never>;
export declare const Slider: import("styled-components").StyledComponent<"div", any, Omit<StyledTabListProps, "variant"> & {
    active: number;
    totalTabs: number;
}, never>;
