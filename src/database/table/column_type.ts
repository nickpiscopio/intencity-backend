import { ColumnType as Type } from '../../enum/column_type';

/**
 * The model class for a column type.
 */
export class ColumnType {
    constructor(public type: Type,
                public length?: number) { }
}