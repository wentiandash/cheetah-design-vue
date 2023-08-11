export declare const PlMessage: (options?: Function | Partial<import("vue").ExtractPropTypes<{
    content: StringConstructor;
    state: {
        type: import("vue").PropType<"info" | "success" | "warning" | "danger">;
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
}>> | undefined) => void;
export default PlMessage;
export * from './src/index';
