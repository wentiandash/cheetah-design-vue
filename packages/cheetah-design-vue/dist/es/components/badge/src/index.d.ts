import type { ExtractPropTypes, PropType } from 'vue';
import type { ComponentState } from '../../component';
export declare const badgeProps: {
    state: {
        type: PropType<ComponentState>;
        default: string;
    };
    max: {
        type: NumberConstructor;
        default: number;
    };
    dot: BooleanConstructor;
    hidden: BooleanConstructor;
    value: (StringConstructor | NumberConstructor)[];
};
export type BadgeProps = ExtractPropTypes<typeof badgeProps>;
