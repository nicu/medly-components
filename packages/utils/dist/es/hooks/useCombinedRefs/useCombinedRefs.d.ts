/**
 * Combines all the refs provided
 *
 * @param {...<T>} refs refs to be combined
 *
 * @returns {React.MutableRefObject<T>} The combined ref
 */
export declare const useCombinedRefs: <T>(...refs: any[]) => import("react").RefObject<T>;
