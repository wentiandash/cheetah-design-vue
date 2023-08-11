import { type ExtractPropTypes, type PropType } from 'vue';
import type { Placement } from '@floating-ui/vue';
import type { ButtonProps } from '../../button';
import type { BadgeProps } from '../../badge';
export type DropdownProps = ExtractPropTypes<typeof dropdownProps>;
export interface DropdownData {
    name: string;
    value?: any;
    title?: string;
    divider?: boolean;
    disabled?: boolean;
    button?: Partial<Pick<ButtonProps, 'state' | 'mode' | 'iconLeft' | 'iconRight'> & {
        badge: Partial<BadgeProps>;
    }>;
    callback?: () => void;
    children?: DropdownData[];
}
declare const dropdownProps: {
    placement: {
        type: PropType<Placement>;
        default: string;
    };
    trigger: {
        type: PropType<boolean | "click" | "hover">;
        default: string;
    };
    data: {
        type: PropType<DropdownData[]>;
        default: () => never[];
    };
};
declare const _default: import("vue").DefineComponent<{
    placement: {
        type: PropType<Placement>;
        default: string;
    };
    trigger: {
        type: PropType<boolean | "click" | "hover">;
        default: string;
    };
    data: {
        type: PropType<DropdownData[]>;
        default: () => never[];
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    placement: {
        type: PropType<Placement>;
        default: string;
    };
    trigger: {
        type: PropType<boolean | "click" | "hover">;
        default: string;
    };
    data: {
        type: PropType<DropdownData[]>;
        default: () => never[];
    };
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
}, {
    data: DropdownData[];
    placement: Placement;
    trigger: boolean | "click" | "hover";
}, {}>;
export default _default;
