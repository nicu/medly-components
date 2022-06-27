import { TableProps } from '../../types';
import { HeadCellStyledProps } from './types';
export declare const HeadCellStyled: import("styled-components").StyledComponent<"th", any, HeadCellStyledProps, never>;
export declare const ResizeHandler: import("styled-components").StyledComponent<"span", any, {}, never>;
export declare const HeadCellButton: import("styled-components").StyledComponent<"button", any, {
    withHoverEffect?: boolean | undefined;
    isSelected?: boolean | undefined;
    tableSize: Required<TableProps>['size'];
    align?: string | undefined;
}, never>;
