import { MaxColumnSizes, TableColumnConfig, TableProps } from './types';
export declare const addSizeToColumnConfig: (columnConfigs: TableColumnConfig[], maxColumnSizes: MaxColumnSizes, parentFieldKey?: string) => TableColumnConfig[];
export declare const getUpdatedColumns: ({ columnConfigs, size, isGroupedTable, maxColumnSizes, isRowSelectable, isRowExpandable }: {
    columnConfigs: TableColumnConfig[];
    size: Required<TableProps['size']>;
    isGroupedTable: boolean;
    maxColumnSizes: MaxColumnSizes;
    isRowSelectable?: boolean | undefined;
    isRowExpandable?: boolean | undefined;
}) => TableColumnConfig[];
export declare const getGridTemplateColumns: (configs: TableColumnConfig[]) => string;
export declare const changeSize: (width: number, dottedField: string, columnConfigs: TableColumnConfig[]) => TableColumnConfig[];
export declare const resolveValueByTableSize: (key: Required<TableProps>['size'], map: {
    default?: string | undefined;
    M?: string | undefined;
    XS?: string | undefined;
    S?: string | undefined;
    L?: string | undefined;
}) => string;
export declare const getNestedValue: (obj: Record<string, unknown>, dottedKey: string) => string;
