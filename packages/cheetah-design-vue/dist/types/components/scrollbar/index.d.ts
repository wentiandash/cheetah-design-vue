export declare const ChScrollbar: import("../../utils").SFCWithInstall<import("vue").DefineComponent<{
    height: NumberConstructor;
    minThumbSize: {
        type: NumberConstructor;
        default: number;
    };
    behavior: {
        type: import("vue").PropType<ScrollBehavior>;
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "scroll"[], "scroll", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    height: NumberConstructor;
    minThumbSize: {
        type: NumberConstructor;
        default: number;
    };
    behavior: {
        type: import("vue").PropType<ScrollBehavior>;
        default: string;
    };
}>> & {
    onScroll?: ((...args: any[]) => any) | undefined;
}, {
    minThumbSize: number;
    behavior: ScrollBehavior;
}, {}>>;
export default ChScrollbar;
export * from './src/index';
