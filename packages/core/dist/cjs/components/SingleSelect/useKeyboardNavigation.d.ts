import { Option } from './types';
declare type Props = {
    isFocused: React.MutableRefObject<boolean>;
    selectedOption?: Option;
    options: Option[];
    setOptions: React.Dispatch<React.SetStateAction<Option[]>>;
    areOptionsVisible: boolean;
    handleOptionClick: (op: Option) => void;
    showOptions: () => void;
    optionsRef: React.RefObject<HTMLUListElement>;
    hideOptions?: () => void;
};
export declare const useKeyboardNavigation: (props: Props) => void;
export {};
