import { HTMLProps, WithThemeProp } from '@medly-components/utils';
import { TabSize, Variant } from '../types';
export interface TabListProps extends HTMLProps<HTMLDivElement> {
    active: any;
    onChange: (id: any) => void;
}
export declare type StyledTabListProps = HTMLProps<HTMLDivElement> & WithThemeProp & {
    tabSize: TabSize;
    variant: Variant;
};
export declare type StyledSliderProps = Omit<StyledTabListProps, 'variant'> & {
    active: number;
    totalTabs: number;
};
