import { HTMLProps } from '@medly-components/utils';
import { ObjectType, TableColumnConfig, TableProps } from '../../types';
export declare type FreezePosition = 'left' | 'right';
export declare type TableCellStyledProps = {
    hidden?: boolean;
    frozen?: boolean;
    freezePosition?: FreezePosition;
    align?: 'left' | 'right' | 'center';
    wrapText?: boolean;
    tableSize: Required<TableProps>['size'];
};
export declare type TableCellProps = TableCellStyledProps & HTMLProps<HTMLTableCellElement> & {
    data: any;
    rowId: any;
    rowData: ObjectType;
    config: TableColumnConfig;
    dottedFieldName: string;
    isLoading?: boolean;
    isRowClickDisabled?: boolean;
    hiddenDivRef: React.RefObject<any>;
    tableSize?: TableProps['size'];
    addColumnMaxSize?: (field: string, value: number) => void;
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
};
