import { FontVariants, FontWeights, Theme } from '@medly-components/theme';
export declare const getFontStyle: ({ fontVariant, fontWeight, theme }: {
    theme: Theme;
    fontVariant?: FontVariants | undefined;
    fontWeight?: FontWeights | undefined;
}) => import("styled-components").FlattenSimpleInterpolation;
