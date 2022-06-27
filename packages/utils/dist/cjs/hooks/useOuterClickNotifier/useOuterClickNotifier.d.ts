import { MutableRefObject } from 'react';
/**
 * Triggers a function when user clicks outside the given ref or presses Esc key
 *
 * @param {(e: any) => void} onOuterClick function to be fired when user clicks outside
 * @param {React.MutableRefObject<any>} innerRef ref of the element
 */
export declare const useOuterClickNotifier: (onOuterClick: (e: any) => void, innerRef: MutableRefObject<any>) => void;
