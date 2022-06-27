import { DateRangePickerTheme } from '@medly-components/theme';
import { ExtendedDateProps } from '../types';
export declare const DateContainer: import("styled-components").StyledComponent<"div", any, ExtendedDateProps & {
    dateTheme: DateRangePickerTheme['date'];
}, "dateTheme" | keyof ExtendedDateProps>;
export declare const Date: import("styled-components").StyledComponent<"button", any, {
    type: "button";
    dateTheme: any;
} & ExtendedDateProps & {
    dateTheme: DateRangePickerTheme['date'];
}, "type" | "dateTheme">;
