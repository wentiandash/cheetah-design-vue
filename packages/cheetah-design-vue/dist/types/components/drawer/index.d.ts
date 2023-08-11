export declare const ChDrawer: import("../../utils").SFCWithInstall<import("vue").DefineComponent<{
    shakeOff: {
        type: import("vue").PropType<("header" | "mask" | "x-button")[]>;
        default: () => never[];
    };
    placement: {
        type: import("vue").PropType<"top" | "right" | "bottom" | "left">;
        default: string;
    };
    fullscreen: BooleanConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("close" | "open")[], "close" | "open", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    shakeOff: {
        type: import("vue").PropType<("header" | "mask" | "x-button")[]>;
        default: () => never[];
    };
    placement: {
        type: import("vue").PropType<"top" | "right" | "bottom" | "left">;
        default: string;
    };
    fullscreen: BooleanConstructor;
}>> & {
    onClose?: ((...args: any[]) => any) | undefined;
    onOpen?: ((...args: any[]) => any) | undefined;
}, {
    placement: "top" | "right" | "bottom" | "left";
    shakeOff: ("header" | "mask" | "x-button")[];
    fullscreen: boolean;
}, {}>>;
export default ChDrawer;
export * from './src/index';
