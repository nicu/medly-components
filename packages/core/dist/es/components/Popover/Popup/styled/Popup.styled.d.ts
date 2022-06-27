import { Placement } from '../../types';
export declare const getPosition: ({ placement, distance }: {
    placement: Placement;
    distance?: string | undefined;
}) => import("styled-components").FlattenSimpleInterpolation;
export declare const PopupStyled: import("styled-components").StyledComponent<"div", any, import("../types").PopoverPopupProps & {
    placement: Placement;
}, never>;
