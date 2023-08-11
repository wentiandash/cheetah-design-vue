export declare const ChPopover: import("../../utils").SFCWithInstall<import("vue").DefineComponent<{
    title: StringConstructor;
    content: StringConstructor;
    placement: {
        type: import("vue").PropType<import("@floating-ui/vue").Placement>;
        default: string;
    };
    trigger: {
        type: import("vue").PropType<boolean | "click" | "hover">;
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    title: StringConstructor;
    content: StringConstructor;
    placement: {
        type: import("vue").PropType<import("@floating-ui/vue").Placement>;
        default: string;
    };
    trigger: {
        type: import("vue").PropType<boolean | "click" | "hover">;
        default: string;
    };
}>>, {
    placement: import("@floating-ui/vue").Placement;
    trigger: boolean | "click" | "hover";
}, {}>>;
export default ChPopover;
export * from './src/index';
