declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    mode: {
        type: import("vue").PropType<import(".").ButtonType>;
        default: string;
    };
    type: {
        type: import("vue").PropType<import(".").ButtonNativeType>;
        default: string;
    };
    state: {
        type: import("vue").PropType<import("../../component").ComponentState>;
        default: string;
    };
    size: {
        type: import("vue").PropType<import("../../component").ComponentSize>;
        default: string;
    };
    shape: {
        type: import("vue").PropType<import(".").ButtonShape>;
        default: string;
    };
    iconLeft: StringConstructor;
    iconRight: StringConstructor;
    disabled: BooleanConstructor;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    mode: {
        type: import("vue").PropType<import(".").ButtonType>;
        default: string;
    };
    type: {
        type: import("vue").PropType<import(".").ButtonNativeType>;
        default: string;
    };
    state: {
        type: import("vue").PropType<import("../../component").ComponentState>;
        default: string;
    };
    size: {
        type: import("vue").PropType<import("../../component").ComponentSize>;
        default: string;
    };
    shape: {
        type: import("vue").PropType<import(".").ButtonShape>;
        default: string;
    };
    iconLeft: StringConstructor;
    iconRight: StringConstructor;
    disabled: BooleanConstructor;
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
}, {
    type: import(".").ButtonNativeType;
    mode: import(".").ButtonType;
    state: import("../../component").ComponentState;
    size: import("../../component").ComponentSize;
    shape: import(".").ButtonShape;
    disabled: boolean;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
