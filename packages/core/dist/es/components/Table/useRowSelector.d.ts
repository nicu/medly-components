import { Dispatch, SetStateAction } from 'react';
import { Data } from './types';
declare type Result = {
    uniqueIds: (string | number)[];
    areAllRowsSelected: boolean;
    isAnyRowSelected: boolean;
    toggleId: (id: number | string) => void;
    setUniqueIds: Dispatch<SetStateAction<any[]>>;
};
declare type Params = {
    data: Data;
    rowSelectionDisableKey?: string;
    rowIdentifier: string;
    selectedIds: (string | number)[];
    setSelectedIds?: Dispatch<SetStateAction<(string | number)[]>>;
};
declare const useRowSelector: ({ data, rowSelectionDisableKey, rowIdentifier, selectedIds, setSelectedIds }: Params) => Result;
export default useRowSelector;
