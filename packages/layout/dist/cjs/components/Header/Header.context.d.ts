export interface Context {
    isOpen: boolean;
    onClose: () => void;
}
declare const HeaderContext: import("react").Context<Context>;
export default HeaderContext;
