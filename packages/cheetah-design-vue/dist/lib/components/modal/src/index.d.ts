import { type ExtractPropTypes, type PropType } from 'vue';
import { type ToggleHandler } from '../../../composables';
export interface ModalInstance extends ToggleHandler, HTMLElement {
}
export type ModalProps = ExtractPropTypes<typeof modalProps>;
type ShakeOffProp = 'x-button' | 'confirm-button' | 'cancel-button' | 'mask' | 'header' | 'footer';
declare const modalProps: {
    title: StringConstructor;
    cancelButtonText: StringConstructor;
    confirmButtonText: StringConstructor;
    draggable: BooleanConstructor;
    shakeOff: {
        type: PropType<ShakeOffProp[]>;
        default: () => never[];
    };
};
declare const _default: import("vue").DefineComponent<{
    title: StringConstructor;
    cancelButtonText: StringConstructor;
    confirmButtonText: StringConstructor;
    draggable: BooleanConstructor;
    shakeOff: {
        type: PropType<ShakeOffProp[]>;
        default: () => never[];
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("close" | "cancel" | "open" | "confirm")[], "close" | "cancel" | "open" | "confirm", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    title: StringConstructor;
    cancelButtonText: StringConstructor;
    confirmButtonText: StringConstructor;
    draggable: BooleanConstructor;
    shakeOff: {
        type: PropType<ShakeOffProp[]>;
        default: () => never[];
    };
}>> & {
    onClose?: ((...args: any[]) => any) | undefined;
    onCancel?: ((...args: any[]) => any) | undefined;
    onOpen?: ((...args: any[]) => any) | undefined;
    onConfirm?: ((...args: any[]) => any) | undefined;
}, {
    draggable: boolean;
    shakeOff: ShakeOffProp[];
}, {}>;
export default _default;
