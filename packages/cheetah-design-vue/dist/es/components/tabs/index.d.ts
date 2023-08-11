export declare const ChTabs: import("../../utils").SFCWithInstall<import("vue").DefineComponent<{
    defaultTab: StringConstructor;
    placement: import("vue").PropType<import("./src/index").TabsPosition>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    defaultTab: StringConstructor;
    placement: import("vue").PropType<import("./src/index").TabsPosition>;
}>>, {}, {}>>;
export declare const ChTabPane: import("../../utils").SFCWithInstall<import("vue").DefineComponent<{
    name: StringConstructor;
} & {
    mode: {
        type: import("vue").PropType<import("../button").ButtonType>;
        default: string;
    };
    type: {
        type: import("vue").PropType<import("../button").ButtonNativeType>;
        default: string;
    };
    state: {
        type: import("vue").PropType<import("../component").ComponentState>;
        default: string;
    };
    size: {
        type: import("vue").PropType<import("../component").ComponentSize>;
        default: string;
    };
    shape: {
        type: import("vue").PropType<import("../button").ButtonShape>;
        default: string;
    };
    iconLeft: StringConstructor;
    iconRight: StringConstructor;
    disabled: BooleanConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    name: StringConstructor;
} & {
    mode: {
        type: import("vue").PropType<import("../button").ButtonType>;
        default: string;
    };
    type: {
        type: import("vue").PropType<import("../button").ButtonNativeType>;
        default: string;
    };
    state: {
        type: import("vue").PropType<import("../component").ComponentState>;
        default: string;
    };
    size: {
        type: import("vue").PropType<import("../component").ComponentSize>;
        default: string;
    };
    shape: {
        type: import("vue").PropType<import("../button").ButtonShape>;
        default: string;
    };
    iconLeft: StringConstructor;
    iconRight: StringConstructor;
    disabled: BooleanConstructor;
}>>, {
    type: import("../button").ButtonNativeType;
    mode: import("../button").ButtonType;
    state: import("../component").ComponentState;
    size: import("../component").ComponentSize;
    shape: import("../button").ButtonShape;
    disabled: boolean;
}, {}>>;
export default ChTabs;
export * from './src/index';
export * from './src/pane';
