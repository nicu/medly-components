export declare const isValidDate: (date: any) => boolean;
export declare const getNumberOfDaysInMonth: (month: number, year: number) => 29 | 28 | 30 | 31;
export declare const getFirstDayOfMonth: (month: number, year: number) => number;
export declare const dateDiff: (date1: Date | null, date2: Date | null) => number | null;
export declare const isSameDay: (date1: Date | null, date2: Date | null) => boolean;
export declare const isSameMonth: (date1: Date, date2: Date) => boolean;
export declare const getMonthAndYearFromDate: (date: Date) => {
    month: number;
    year: number;
};
export declare const getPreviousMonthAndYear: (month: number, year: number) => {
    month: number;
    year: number;
};
export declare const getNextMonthAndYear: (month: number, year: number) => {
    month: number;
    year: number;
};
export declare const getCalendarDates: (month: number, year: number, calendarWeeks?: number) => number[][];
