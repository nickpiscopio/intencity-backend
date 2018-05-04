import { ColumnType } from './column_type';

/**
 * The model class for a column.
 */
export class Column {
    constructor(public name: string,
                public type: ColumnType,
                public primary: boolean) { }
}