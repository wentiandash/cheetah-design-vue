declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    state: {
        type: import("vue").PropType<import("../../component").ComponentState>;
        default: string;
    };
    max: {
        type: NumberConstructor;
        default: number;
    };
    dot: BooleanConstructor;
    hidden: BooleanConstructor;
    value: (StringConstructor | NumberConstructor)[];
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    state: {
        type: import("vue").PropType<import("../../component").ComponentState>;
        default: string;
    };
    max: {
        type: NumberConstructor;
        default: number;
    };
    dot: BooleanConstructor;
    hidden: BooleanConstructor;
    value: (StringConstructor | NumberConstructor)[];
}>>, {
    hidden: boolean;
    state: import("../../component").ComponentState;
    max: number;
    dot: boolean;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
