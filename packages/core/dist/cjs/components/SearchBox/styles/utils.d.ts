import { WithThemeProp } from '@medly-components/utils';
import { StyledSearchBoxProps } from '../types';
export declare const getSearchBoxSize: ({ theme, size }: StyledSearchBoxProps & WithThemeProp) => string;
export declare const getBorderAndBoxShadow: (color: string, boxShadow: string, size?: string) => import("styled-components").FlattenSimpleInterpolation;
export declare const getIconWrapperStyle: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<import("../types").SearchBoxProps & {
    size: import("@medly-components/theme").Size;
} & WithThemeProp, any>>;
