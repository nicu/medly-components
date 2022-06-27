import { TableProps } from '../../../types';
import { TableCellStyledProps } from '../types';
export declare const defaultTableCellPaddings: {
    [k in Required<TableProps>['size']]: string;
};
export declare const outlinedTableCellPaddings: typeof defaultTableCellPaddings;
export declare const Cell: import("styled-components").StyledComponent<"td", any, TableCellStyledProps, never>;
