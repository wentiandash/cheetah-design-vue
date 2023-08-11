import type { ExtractPropTypes, PropType } from 'vue';
import type { ComponentState } from '../../component';
export declare const alertProps: {
    mode: {
        type: PropType<"solid" | "outline" | "soft">;
        default: string;
    };
    state: {
        type: PropType<ComponentState>;
        default: string;
    };
    title: StringConstructor;
    description: StringConstructor;
    icon: StringConstructor;
    closable: BooleanConstructor;
};
export type AlertProps = ExtractPropTypes<typeof alertProps>;
