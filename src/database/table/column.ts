import { ColumnType } from './column_type';

/**
 * The model class for a column.
 */
export class Column {
    /**
     * The constructor for the column.
     *
     * @param {string} name         The name of the column.
     * @param {ColumnType} type     The type the column should be.
     * @param {boolean} nullable    Boolean value for whether the column can be null.
     * @param {boolean} primary     Boolean value for whether the column is a primary key.
 *                                  This is an optional value.
     */
    constructor(public name: string,
                public type: ColumnType,
                public nullable: boolean,
                public primary?: boolean) { }
}