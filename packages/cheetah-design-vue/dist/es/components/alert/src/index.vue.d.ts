declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    mode: {
        type: import("vue").PropType<"solid" | "outline" | "soft">;
        default: string;
    };
    state: {
        type: import("vue").PropType<import("../../component").ComponentState>;
        default: string;
    };
    title: StringConstructor;
    description: StringConstructor;
    icon: StringConstructor;
    closable: BooleanConstructor;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "close"[], "close", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    mode: {
        type: import("vue").PropType<"solid" | "outline" | "soft">;
        default: string;
    };
    state: {
        type: import("vue").PropType<import("../../component").ComponentState>;
        default: string;
    };
    title: StringConstructor;
    description: StringConstructor;
    icon: StringConstructor;
    closable: BooleanConstructor;
}>> & {
    onClose?: ((...args: any[]) => any) | undefined;
}, {
    mode: "solid" | "outline" | "soft";
    state: import("../../component").ComponentState;
    closable: boolean;
}, {}>, {
    title?(_: {}): any;
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
