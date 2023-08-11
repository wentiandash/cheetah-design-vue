import type { ExtractPropTypes, PropType } from 'vue';
import type { ComponentSize } from '../../component';
export type InputMode = 'bordered' | 'underline' | 'light';
export declare const inputProps: {
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    mode: {
        type: PropType<InputMode>;
        default: string;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: PropType<ComponentSize>;
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
};
export type InputProps = ExtractPropTypes<typeof inputProps>;
