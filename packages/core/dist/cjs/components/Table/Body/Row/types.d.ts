import { HTMLProps, Omit, WithThemeProp } from '@medly-components/utils';
import { GridTemplateProps } from '../../types';
export declare type StyledProps = GridTemplateProps & HTMLProps<HTMLTableRowElement> & WithThemeProp & {
    isSelected?: boolean;
    isExpanded?: boolean;
    isExpandable?: boolean;
    isNavigated?: boolean;
    showRowWithCardStyle?: boolean;
    withRowSeparators?: boolean;
};
export declare type RowProps = Omit<HTMLProps<HTMLTableRowElement>, 'style' | 'data'> & {
    data: {
        [key: string]: any;
    };
    selectedRowIds: Array<any>;
    onRowSelection: (id: any) => void;
    showShadowAfterFrozenElement?: boolean;
    isNavigated?: boolean;
    isRowExpandedFromKeyboard?: boolean;
    isRowCollapsedFromKeyboard?: boolean;
};
