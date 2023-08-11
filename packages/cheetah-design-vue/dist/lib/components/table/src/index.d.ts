import type { Ref } from 'vue';
export interface TableProps {
    width?: number;
    header: TableHeaderCell[];
    data: Record<string, any>[];
    fixedHeader?: boolean;
    striped?: boolean;
    border?: boolean;
}
export interface TableConfig {
    striped: boolean;
    width: number;
    columns: TableHeaderCell[];
    data: Record<string, any>[];
}
export interface TableHeaderCell {
    name: string;
    key?: string;
    width?: number;
    index?: number;
    children?: TableHeaderCell[];
}
export interface TableHeaderCellProps {
    data: TableHeaderCell;
}
export interface TableCellProps {
    data: any;
}
export interface TableRowProps {
    data: Record<string, any>[];
}
export declare const config: Ref<{
    striped: boolean;
    width: number;
    columns: {
        name: string;
        key?: string | undefined;
        width?: number | undefined;
        index?: number | undefined;
        children?: any[] | undefined;
    }[];
    data: Record<string, any>[];
}>;
export declare const genTableConfig: (props: TableProps, el: Ref<HTMLElement | undefined>) => void;
