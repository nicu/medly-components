import { TableProps } from '../../../types';
export declare const Row: import("styled-components").StyledComponent<"tr", any, import("../../../types").GridTemplateProps & import("@medly-components/utils").HTMLProps<HTMLTableRowElement> & import("@medly-components/utils").WithThemeProp & {
    isLoading?: boolean | undefined;
    tableWidth?: number | undefined;
    isRowSelected?: boolean | undefined;
    isRowExpanded?: boolean | undefined;
    isRowExpandable?: boolean | undefined;
    isRowSelectable?: boolean | undefined;
    showRowWithCardStyle?: boolean | undefined;
    tableSize: "M" | "XS" | "S" | "L" | undefined;
}, never>;
export declare const TitleCell: import("styled-components").StyledComponent<"td", any, {
    tableSize: Required<TableProps>['size'];
    isRowExpandable?: boolean | undefined;
    isRowSelectable?: boolean | undefined;
}, never>;
export declare const CountChip: import("styled-components").StyledComponent<"span", any, {
    isRowSelected?: boolean | undefined;
}, never>;
export declare const SecondaryContent: import("styled-components").StyledComponent<import("react").FC<import("../../../../..").TextProps> & import("@medly-components/utils").WithStyle, any, {}, never>;
export declare const ExpansionCell: import("styled-components").StyledComponent<"td", any, {
    isRowExpanded?: boolean | undefined;
    isRowSelected?: boolean | undefined;
    showPadding?: boolean | undefined;
    tableSize: Required<TableProps>['size'];
}, never>;
