export declare const addPageItems: (from: number, to: number, result: (number | '...')[]) => (number | "...")[];
export declare const paginator: (totalItems: number, activePage?: number, itemsPerPage?: number) => {
    currentPage: number;
    linkItems: (number | "...")[];
    totalPages: number;
};
