import type { ExtractPropTypes, PropType, Ref } from 'vue';
import type { ButtonShape, ButtonType } from '../../button';
export type PaginationProps = ExtractPropTypes<typeof paginationProps>;
export type PaginationInstance = HTMLElement & {
    current: Ref<number>;
    prev: (step?: number) => any;
    next: (step?: number) => any;
    toggle: (value?: number) => any;
};
declare const paginationProps: {
    count: {
        type: NumberConstructor;
        default: number;
    };
    showCount: {
        type: NumberConstructor;
        default: number;
    };
    mode: {
        type: PropType<ButtonType>;
        default: string;
    };
    shape: {
        type: PropType<ButtonShape>;
        default: string;
    };
};
declare const _default: import("vue").DefineComponent<{
    count: {
        type: NumberConstructor;
        default: number;
    };
    showCount: {
        type: NumberConstructor;
        default: number;
    };
    mode: {
        type: PropType<ButtonType>;
        default: string;
    };
    shape: {
        type: PropType<ButtonShape>;
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    count: {
        type: NumberConstructor;
        default: number;
    };
    showCount: {
        type: NumberConstructor;
        default: number;
    };
    mode: {
        type: PropType<ButtonType>;
        default: string;
    };
    shape: {
        type: PropType<ButtonShape>;
        default: string;
    };
}>>, {
    mode: ButtonType;
    shape: ButtonShape;
    count: number;
    showCount: number;
}, {}>;
export default _default;
