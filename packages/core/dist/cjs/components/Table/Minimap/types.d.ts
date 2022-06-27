import { HTMLProps } from 'react';
export interface MinimapProps extends Omit<HTMLProps<HTMLTableRowElement>, 'ref' | 'as'> {
    tableRef: any;
    minimapWidth?: number;
    controllerWidth?: number;
    sliderContentPadding?: number;
    minimapDimensionDeps?: Array<any>;
}
