import { WithThemeProp } from '@medly-components/utils';
import { StyledSearchBoxProps } from '../types';
export declare const getOptionsStyles: ({ theme, size, areOptionsVisible }: import("../types").SearchBoxProps & {
    size: import("@medly-components/theme").Size;
} & WithThemeProp & {
    areOptionsVisible?: boolean | undefined;
}) => import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<import("../types").SearchBoxProps & {
    size: import("@medly-components/theme").Size;
} & WithThemeProp, any>>;
