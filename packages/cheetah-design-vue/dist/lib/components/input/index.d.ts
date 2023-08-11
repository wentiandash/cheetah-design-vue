export declare const ChInput: import("../../utils").SFCWithInstall<{
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: {
            type?: string | undefined;
            mode?: import("./src/input").InputMode | undefined;
            size?: import("../component").ComponentSize | undefined;
            disabled?: boolean | undefined;
            modelValue?: string | number | undefined;
            clearable?: boolean | undefined;
            key?: string | number | symbol | undefined;
            ref?: import("vue").VNodeRef | undefined;
            ref_for?: boolean | undefined;
            ref_key?: string | undefined;
            onVnodeBeforeMount?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeMounted?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeBeforeUpdate?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeUpdated?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeBeforeUnmount?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeUnmounted?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            class?: unknown;
            style?: unknown;
            readonly pattern?: RegExp | undefined;
            onBlur?: ((...args: any[]) => any) | undefined;
            readonly placeholder?: string | undefined;
            readonly errorTip?: string | undefined;
            readonly successTip?: string | undefined;
            readonly infoTip?: string | undefined;
            readonly prefixIcon?: string | undefined;
            readonly suffixIcon?: string | undefined;
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        };
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot<any> | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: (event: "update:modelValue" | "blur", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            modelValue: {
                type: (StringConstructor | NumberConstructor)[];
                default: string;
            };
            mode: {
                type: import("vue").PropType<import("./src/input").InputMode>;
                default: string;
            };
            type: {
                type: StringConstructor;
                default: string;
            };
            size: {
                type: import("vue").PropType<import("../component").ComponentSize>;
                default: string;
            };
            errorTip: StringConstructor;
            successTip: StringConstructor;
            infoTip: StringConstructor;
            prefixIcon: StringConstructor;
            suffixIcon: StringConstructor;
            placeholder: StringConstructor;
            disabled: BooleanConstructor;
            clearable: BooleanConstructor;
            pattern: RegExpConstructor;
        }>> & {
            onBlur?: ((...args: any[]) => any) | undefined;
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "blur")[], string, {
            type: string;
            mode: import("./src/input").InputMode;
            size: import("../component").ComponentSize;
            disabled: boolean;
            modelValue: string | number;
            clearable: boolean;
        }, {}, string, {}> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<{
        modelValue: {
            type: (StringConstructor | NumberConstructor)[];
            default: string;
        };
        mode: {
            type: import("vue").PropType<import("./src/input").InputMode>;
            default: string;
        };
        type: {
            type: StringConstructor;
            default: string;
        };
        size: {
            type: import("vue").PropType<import("../component").ComponentSize>;
            default: string;
        };
        errorTip: StringConstructor;
        successTip: StringConstructor;
        infoTip: StringConstructor;
        prefixIcon: StringConstructor;
        suffixIcon: StringConstructor;
        placeholder: StringConstructor;
        disabled: BooleanConstructor;
        clearable: BooleanConstructor;
        pattern: RegExpConstructor;
    }>> & {
        onBlur?: ((...args: any[]) => any) | undefined;
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    } & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    mode: {
        type: import("vue").PropType<import("./src/input").InputMode>;
        default: string;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: import("vue").PropType<import("../component").ComponentSize>;
        default: string;
    };
    errorTip: StringConstructor;
    successTip: StringConstructor;
    infoTip: StringConstructor;
    prefixIcon: StringConstructor;
    suffixIcon: StringConstructor;
    placeholder: StringConstructor;
    disabled: BooleanConstructor;
    clearable: BooleanConstructor;
    pattern: RegExpConstructor;
}>> & {
    onBlur?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "blur")[], "update:modelValue" | "blur", {
    type: string;
    mode: import("./src/input").InputMode;
    size: import("../component").ComponentSize;
    disabled: boolean;
    modelValue: string | number;
    clearable: boolean;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        prepend?(_: {}): any;
        selectWrapper?(_: {}): any;
        append?(_: {}): any;
    };
})>;
export default ChInput;
