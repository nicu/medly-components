export declare const ListWrapper: import("styled-components").StyledComponent<import("react").FC<import("../..").ListProps> & import("@medly-components/utils").WithStyle, any, {}, never>;
export declare const getPageNumberButtonStyleByState: (itemKey: 'pageNumber' | 'overlayPageNumber', state: 'default' | 'active' | 'pressed' | 'hovered') => import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<any>>;
export declare const BaseButton: import("styled-components").StyledComponent<"button", any, {
    type: "button";
}, "type">;
export declare const PageNumberButton: import("styled-components").StyledComponent<"button", any, {
    type: "button";
} & {
    isActive?: boolean | undefined;
}, "type">;
export declare const PageNavButton: import("styled-components").StyledComponent<"button", any, {
    type: "button";
} & {
    disabled: boolean;
}, "type">;
