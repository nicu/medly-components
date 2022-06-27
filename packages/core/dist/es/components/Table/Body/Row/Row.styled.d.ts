import { GridTemplateProps } from '../../types';
import { defaultTableCellPaddings } from '../Cell/Styled';
export declare const Row: import("styled-components").StyledComponent<"tr", any, {
    style: {
        gridTemplateColumns: string | undefined;
    };
} & GridTemplateProps & import("@medly-components/utils").HTMLProps<HTMLTableRowElement> & import("@medly-components/utils").WithThemeProp & {
    isSelected?: boolean | undefined;
    isExpanded?: boolean | undefined;
    isExpandable?: boolean | undefined;
    isNavigated?: boolean | undefined;
    showRowWithCardStyle?: boolean | undefined;
    withRowSeparators?: boolean | undefined;
}, "style">;
export declare const NoResultCell: import("styled-components").StyledComponent<"td", any, {
    width: number;
    tableSize: keyof typeof defaultTableCellPaddings;
}, never>;
export declare const NoResultRow: import("styled-components").StyledComponent<"tr", any, {
    style: {
        gridTemplateColumns: string | undefined;
    };
} & GridTemplateProps & import("@medly-components/utils").HTMLProps<HTMLTableRowElement> & import("@medly-components/utils").WithThemeProp & {
    isSelected?: boolean | undefined;
    isExpanded?: boolean | undefined;
    isExpandable?: boolean | undefined;
    isNavigated?: boolean | undefined;
    showRowWithCardStyle?: boolean | undefined;
    withRowSeparators?: boolean | undefined;
} & {
    withMinimap?: boolean | undefined;
}, "style">;
