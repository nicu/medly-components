declare type SeparatorColors = {
    default: string;
    active: string;
    error: string;
    disabled: string;
};
declare type DateColors = {
    default: string;
    selected: string;
    hovered: string;
    disabled: string;
};
export interface DateRangePickerTheme {
    inputSeparatorColor: {
        filled: SeparatorColors;
        outlined: SeparatorColors;
    };
    date: {
        borderRadius: string;
        color: {
            selected: string;
            disabled: string;
        };
        borderColor: DateColors & {
            currentDate: string;
        };
        bgColor: DateColors;
        fillColor: {
            hovered: string;
            selected: string;
        };
    };
}
export {};
