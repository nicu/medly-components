export declare const ButtonStyled: import("styled-components").StyledComponent<"button", any, Omit<import("@medly-components/utils").HTMLProps<HTMLButtonElement>, "size"> & {
    theme?: import("@medly-components/theme").Theme | undefined;
} & {
    as?: keyof JSX.IntrinsicElements | import("react").ComponentType<any> | undefined;
    to?: string | undefined;
    size?: import("@medly-components/theme").ButtonSizes | undefined;
    type?: "button" | "submit" | "reset" | undefined;
    variant?: "solid" | "flat" | "outlined" | undefined;
    edges?: "circle" | "square" | "rounded" | undefined;
    disabled?: boolean | undefined;
    fullWidth?: boolean | undefined;
    isLoading?: boolean | undefined;
    hideUnderline?: boolean | undefined;
}, never>;
