import { type ExtractPropTypes, type PropType } from 'vue';
export type MessageProps = Partial<ExtractPropTypes<typeof messageProps>>;
declare const messageProps: {
    content: StringConstructor;
    state: {
        type: PropType<"info" | "success" | "warning" | "danger">;
        default: string;
    };
    closable: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoClose: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare const MessageConstructor: import("vue").DefineComponent<{
    content: StringConstructor;
    state: {
        type: PropType<"info" | "success" | "warning" | "danger">;
        default: string;
    };
    closable: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoClose: {
        type: BooleanConstructor;
        default: boolean;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    content: StringConstructor;
    state: {
        type: PropType<"info" | "success" | "warning" | "danger">;
        default: string;
    };
    closable: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoClose: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    state: "info" | "success" | "warning" | "danger";
    closable: boolean;
    autoClose: boolean;
}, {}>;
declare const _default: (options?: MessageProps | Function) => void;
export default _default;
