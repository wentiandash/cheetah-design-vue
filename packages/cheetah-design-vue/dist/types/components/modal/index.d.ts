export declare const ChModal: import("../../utils").SFCWithInstall<import("vue").DefineComponent<{
    title: StringConstructor;
    cancelButtonText: StringConstructor;
    confirmButtonText: StringConstructor;
    draggable: BooleanConstructor;
    shakeOff: {
        type: import("vue").PropType<("footer" | "header" | "mask" | "x-button" | "confirm-button" | "cancel-button")[]>;
        default: () => never[];
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("close" | "cancel" | "open" | "confirm")[], "close" | "cancel" | "open" | "confirm", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    title: StringConstructor;
    cancelButtonText: StringConstructor;
    confirmButtonText: StringConstructor;
    draggable: BooleanConstructor;
    shakeOff: {
        type: import("vue").PropType<("footer" | "header" | "mask" | "x-button" | "confirm-button" | "cancel-button")[]>;
        default: () => never[];
    };
}>> & {
    onClose?: ((...args: any[]) => any) | undefined;
    onCancel?: ((...args: any[]) => any) | undefined;
    onOpen?: ((...args: any[]) => any) | undefined;
    onConfirm?: ((...args: any[]) => any) | undefined;
}, {
    draggable: boolean;
    shakeOff: ("footer" | "header" | "mask" | "x-button" | "confirm-button" | "cancel-button")[];
}, {}>>;
export default ChModal;
export * from './src/index';
