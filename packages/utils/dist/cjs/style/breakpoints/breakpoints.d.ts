import { BreakpointsTheme } from '@medly-components/theme';
declare type Breakpoint = keyof BreakpointsTheme;
export declare const breakpoints: (bp: BreakpointsTheme) => {
    up: (key: Breakpoint) => string;
    down: (key: Breakpoint) => string;
    only: (key: Breakpoint) => string;
    between: (start: Breakpoint, end: Breakpoint) => string;
    multiple: (sizes: Breakpoint | Breakpoint[]) => string;
};
export {};
