import { Dispatch, SetStateAction } from 'react';
declare type Result = {
    selectedIds: (string | number)[];
    toggleIds: (ids: any[]) => void;
};
declare type Params = {
    selectedIds: (string | number)[];
    setSelectedIds?: Dispatch<SetStateAction<(string | number)[]>>;
};
declare const useGroupedRowSelector: ({ selectedIds, setSelectedIds }: Params) => Result;
export default useGroupedRowSelector;
