import { DependencyList } from 'react';
/**
 * An useEffect that does not run on first render
 *
 * @param {() => void} effect -  The function to be executed on effect
 * @param {DependencyList} dependencies -  If present, effect will only activate if the values in the list change.
 *
 */
export declare const useUpdateEffect: (effect: () => void, dependencies?: DependencyList) => void;
