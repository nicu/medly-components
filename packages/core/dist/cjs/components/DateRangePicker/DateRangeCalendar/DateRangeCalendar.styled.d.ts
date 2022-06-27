import { Placement } from '../../Popover/types';
import { CalendarAnimationTypes } from './types';
export declare const navigators: import("styled-components").FlattenSimpleInterpolation, monthSeparator: import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<any>>;
export declare const DateRangeCalendar: import("styled-components").StyledComponent<"div", any, {
    size: 'S' | 'M';
    placement: Placement;
    withSingleMonth?: boolean | undefined;
}, never>;
export declare const Header: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const MonthsWrapper: import("styled-components").StyledComponent<"div", any, {
    slideDirection: CalendarAnimationTypes;
}, never>;
