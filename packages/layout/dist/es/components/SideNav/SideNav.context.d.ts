export interface Context {
    /** Will be true when user hovers on sidenav */
    isHovered: boolean;
    /** Will be true sidenav is expanded */
    isExpanded: boolean;
    /** Active nav item path */
    activeItem: string;
    /** This func can be used to change active item */
    activeItemChangeHandler: (val: string) => void;
}
declare const SideNavContext: import("react").Context<Context>;
export default SideNavContext;
