export declare const ChDropdown: import("../../utils").SFCWithInstall<import("vue").DefineComponent<{
    placement: {
        type: import("vue").PropType<import("@floating-ui/vue").Placement>;
        default: string;
    };
    trigger: {
        type: import("vue").PropType<boolean | "click" | "hover">;
        default: string;
    };
    data: {
        type: import("vue").PropType<import("./src/index").DropdownData[]>;
        default: () => never[];
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    placement: {
        type: import("vue").PropType<import("@floating-ui/vue").Placement>;
        default: string;
    };
    trigger: {
        type: import("vue").PropType<boolean | "click" | "hover">;
        default: string;
    };
    data: {
        type: import("vue").PropType<import("./src/index").DropdownData[]>;
        default: () => never[];
    };
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
}, {
    data: import("./src/index").DropdownData[];
    placement: import("@floating-ui/vue").Placement;
    trigger: boolean | "click" | "hover";
}, {}>>;
export default ChDropdown;
export * from './src/index';
