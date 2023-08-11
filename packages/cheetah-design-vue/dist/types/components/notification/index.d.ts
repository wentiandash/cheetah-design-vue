export declare const PlNotification: (options?: Function | Partial<import("vue").ExtractPropTypes<{
    title: StringConstructor;
    content: StringConstructor;
    cancelButtonText: StringConstructor;
    confirmButtonText: StringConstructor;
    onCancel: import("vue").PropType<(handler: import("./src/index").NotificationInstance) => any>;
    onConfirm: import("vue").PropType<(handler: import("./src/index").NotificationInstance) => any>;
    shakeOff: {
        type: import("vue").PropType<("title" | "icon" | "x-button" | "confirm-button" | "cancel-button")[]>;
        default: () => never[];
    };
    autoClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    placement: {
        type: import("vue").PropType<"right" | "left">;
        default: string;
    };
}>> | undefined) => void;
export default PlNotification;
export * from './src/index';
