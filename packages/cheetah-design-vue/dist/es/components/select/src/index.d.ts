import type { SelectOption } from './select';
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: import("vue").PropType<SelectOption>;
        default: () => {};
    };
    options: {
        type: import("vue").PropType<SelectOption[]>;
        default: never[];
    };
    mode: {
        type: import("vue").PropType<import("../../input/src/input").InputMode>;
        default: string;
    };
    size: {
        type: import("vue").PropType<import("../../component").ComponentSize>;
        default: string;
    };
    infoTip: {
        type: StringConstructor;
        default: string;
    };
    prefixIcon: StringConstructor;
    suffixIcon: StringConstructor;
    placeholder: StringConstructor;
    disabled: BooleanConstructor;
    clearable: BooleanConstructor;
    multiple: BooleanConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: import("vue").PropType<SelectOption>;
        default: () => {};
    };
    options: {
        type: import("vue").PropType<SelectOption[]>;
        default: never[];
    };
    mode: {
        type: import("vue").PropType<import("../../input/src/input").InputMode>;
        default: string;
    };
    size: {
        type: import("vue").PropType<import("../../component").ComponentSize>;
        default: string;
    };
    infoTip: {
        type: StringConstructor;
        default: string;
    };
    prefixIcon: StringConstructor;
    suffixIcon: StringConstructor;
    placeholder: StringConstructor;
    disabled: BooleanConstructor;
    clearable: BooleanConstructor;
    multiple: BooleanConstructor;
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    mode: import("../../input/src/input").InputMode;
    size: import("../../component").ComponentSize;
    disabled: boolean;
    modelValue: SelectOption;
    infoTip: string;
    clearable: boolean;
    multiple: boolean;
    options: SelectOption[];
}, {}>;
export default _default;
