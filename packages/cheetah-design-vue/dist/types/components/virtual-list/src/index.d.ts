import { type ExtractPropTypes } from 'vue';
export type VirtualListProps = ExtractPropTypes<typeof virtualListProps>;
export type HTMLElementWithEl = HTMLElement & {
    $el: HTMLElement;
};
declare const virtualListProps: {
    listHeight: NumberConstructor;
    listItemCount: {
        type: NumberConstructor;
        default: number;
    };
    estimatedListItemHeight: {
        type: NumberConstructor;
        required: boolean;
    };
};
declare const _default: import("vue").DefineComponent<{
    listHeight: NumberConstructor;
    listItemCount: {
        type: NumberConstructor;
        default: number;
    };
    estimatedListItemHeight: {
        type: NumberConstructor;
        required: boolean;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    listHeight: NumberConstructor;
    listItemCount: {
        type: NumberConstructor;
        default: number;
    };
    estimatedListItemHeight: {
        type: NumberConstructor;
        required: boolean;
    };
}>>, {
    listItemCount: number;
}, {}>;
export default _default;
