import { ColumnType as Type } from '../../enum/column_type';

/**
 * The model class for a column type.
 */
export class ColumnType {
    /**
     * The constructor for the column type.
     *
     * @param {ColumnType} type     The type of the column.
     * @param {number} length       The length the column is.
     *                              This is an optional value.
     */
    constructor(public type: Type,
                public length?: number) { }
}