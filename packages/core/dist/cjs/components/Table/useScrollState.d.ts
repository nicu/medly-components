declare type Result = [
    {
        isScrolledToTop: boolean;
        isScrolledToLeft: boolean;
        isScrolledToBottom: boolean;
        scrolledPercentage: number;
    },
    (e: React.UIEvent<HTMLDivElement>) => void
];
export declare const useScrollState: () => Result;
export {};
