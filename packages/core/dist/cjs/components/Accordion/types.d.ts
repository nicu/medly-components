import { WithStyle } from '@medly-components/utils';
import type { Context, Dispatch, FC, SetStateAction } from 'react';
export declare type StaticProps = {
    Header: FC<HeaderProps> & WithStyle;
    Content: FC & WithStyle;
    Context: Context<AccordionContextType>;
};
export declare type AccordionContextType = [
    boolean /** Current active state */,
    Dispatch<SetStateAction<boolean>> /** Function to be called to toggle the active state */
];
export declare type AccordionProps = {
    defaultActive?: boolean;
    active?: boolean;
    onChange?: Dispatch<SetStateAction<boolean>>;
    iconColor?: string;
};
export declare type HeaderProps = {
    iconColor?: string;
};
