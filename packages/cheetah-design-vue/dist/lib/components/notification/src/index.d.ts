import type { ExtractPropTypes, PropType } from 'vue';
import { type ToggleHandler } from '../../../composables';
type ShakeOffProp = 'x-button' | 'icon' | 'title' | 'confirm-button' | 'cancel-button';
export type NotificationProps = Partial<ExtractPropTypes<typeof notificationProps>>;
export type NotificationInstance = Pick<ToggleHandler, 'state' | 'open' | 'close'>;
declare const notificationProps: {
    title: StringConstructor;
    content: StringConstructor;
    cancelButtonText: StringConstructor;
    confirmButtonText: StringConstructor;
    onCancel: PropType<(handler: NotificationInstance) => any>;
    onConfirm: PropType<(handler: NotificationInstance) => any>;
    shakeOff: {
        type: PropType<ShakeOffProp[]>;
        default: () => never[];
    };
    autoClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    placement: {
        type: PropType<"right" | "left">;
        default: string;
    };
};
export declare const NotificationConstructor: import("vue").DefineComponent<{
    title: StringConstructor;
    content: StringConstructor;
    cancelButtonText: StringConstructor;
    confirmButtonText: StringConstructor;
    onCancel: PropType<(handler: NotificationInstance) => any>;
    onConfirm: PropType<(handler: NotificationInstance) => any>;
    shakeOff: {
        type: PropType<ShakeOffProp[]>;
        default: () => never[];
    };
    autoClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    placement: {
        type: PropType<"right" | "left">;
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    title: StringConstructor;
    content: StringConstructor;
    cancelButtonText: StringConstructor;
    confirmButtonText: StringConstructor;
    onCancel: PropType<(handler: NotificationInstance) => any>;
    onConfirm: PropType<(handler: NotificationInstance) => any>;
    shakeOff: {
        type: PropType<ShakeOffProp[]>;
        default: () => never[];
    };
    autoClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    placement: {
        type: PropType<"right" | "left">;
        default: string;
    };
}>>, {
    placement: "right" | "left";
    shakeOff: ShakeOffProp[];
    autoClose: boolean;
}, {}>;
declare const _default: (options?: NotificationProps | Function) => void;
export default _default;
