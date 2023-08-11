import type { PropType } from 'vue';
import type { ComponentSize } from '../../component';
import type { InputMode } from '../../input/src/input';
export interface SelectOption {
    name: string;
    value?: any;
}
export declare const selectProps: {
    modelValue: {
        type: PropType<SelectOption>;
        default: () => {};
    };
    options: {
        type: PropType<SelectOption[]>;
        default: never[];
    };
    mode: {
        type: PropType<InputMode>;
        default: string;
    };
    size: {
        type: PropType<ComponentSize>;
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
};
