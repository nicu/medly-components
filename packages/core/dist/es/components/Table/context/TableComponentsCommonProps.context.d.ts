import { TableProps } from '../types';
export declare const TableComponentsCommonPropsContext: import("react").Context<TableProps & {
    rowIdentifier: string;
    size: Required<TableProps>['size'];
    isGroupedTable: boolean;
    tableRef: React.RefObject<HTMLTableElement>;
    hiddenDivRef: React.MutableRefObject<any>;
    addColumnMaxSize: (field: string, value: number) => void;
    keyBindings: Required<TableProps>['keyBindings'];
}>;
