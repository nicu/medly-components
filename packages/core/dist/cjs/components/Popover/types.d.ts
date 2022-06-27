import { HTMLProps } from '@medly-components/utils';
import Popup from './Popup';
export declare type Placement = 'top-start' | 'top' | 'top-end' | 'right-start' | 'right' | 'right-end' | 'bottom-end' | 'bottom' | 'bottom-start' | 'left-end' | 'left' | 'left-start';
export declare type InteractionType = 'click' | 'hover';
export declare type PopoverContextType = [
    boolean /** Current open state */,
    React.Dispatch<React.SetStateAction<boolean>> /** Function to be called to toggle the open state */
];
export declare type StaticProps = {
    Popup: typeof Popup;
    Context: React.Context<PopoverContextType>;
};
export interface PopoverProps extends HTMLProps<HTMLDivElement> {
    /** Interaction type */
    interactionType?: InteractionType;
}
