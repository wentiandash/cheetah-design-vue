declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    mode: {
        type: import("vue").PropType<import("./input").InputMode>;
        default: string;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: import("vue").PropType<import("../../component").ComponentSize>;
        default: string;
    };
    errorTip: StringConstructor;
    successTip: StringConstructor;
    infoTip: StringConstructor;
    prefixIcon: StringConstructor;
    suffixIcon: StringConstructor;
    placeholder: StringConstructor;
    disabled: BooleanConstructor;
    clearable: BooleanConstructor;
    pattern: RegExpConstructor;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "blur")[], "update:modelValue" | "blur", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    mode: {
        type: import("vue").PropType<import("./input").InputMode>;
        default: string;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: import("vue").PropType<import("../../component").ComponentSize>;
        default: string;
    };
    errorTip: StringConstructor;
    successTip: StringConstructor;
    infoTip: StringConstructor;
    prefixIcon: StringConstructor;
    suffixIcon: StringConstructor;
    placeholder: StringConstructor;
    disabled: BooleanConstructor;
    clearable: BooleanConstructor;
    pattern: RegExpConstructor;
}>> & {
    onBlur?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    type: string;
    mode: import("./input").InputMode;
    size: import("../../component").ComponentSize;
    disabled: boolean;
    modelValue: string | number;
    clearable: boolean;
}, {}>, {
    prepend?(_: {}): any;
    selectWrapper?(_: {}): any;
    append?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
