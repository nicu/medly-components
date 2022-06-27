import { MutableRefObject } from 'react';
/**
 * A custom hook to detect when the user is pressing a specific key or a collection of keys
 *
 * @param {string | string[]} targetKeys -  The key(s) to watch
 * @param {boolean} [stopPropagation=false] - To prevent the propagation action that belongs to the event
 * @param {MutableRefObject<any>} [ref] - To prevent the default action that belongs to the event
 *
 * @returns {boolean} - TRUE  a match.
 */
export declare const useKeyPress: (targetKeys: string | string[], stopPropagation?: boolean, ref?: MutableRefObject<any> | undefined) => boolean;
