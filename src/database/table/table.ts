import { Column } from './column';
import { ColumnType } from '../../enum/column_type';

/**
 * The table class.
 */
export class Table {
    protected tableName: string;

    protected columns: Column[];

    /**
     * Generates the create table query.
     *
     * @return {string} The create table query.
     */
    getCreateTableQuery() {
        let query = 'create table if not exists ' + this.tableName + '(';

        let length = this.columns.length;
        for (let i = 0; i < length; i++) {
            let column = this.columns[i];

            let columnType = column.type;
            query += column.name + ' ' + ColumnType[columnType.type];

            let columnLength = columnType.length;
            if (columnLength !== undefined) {
                query += '(' + columnLength + ')';
            }

            let primary = column.primary;
            if (primary) {
                query += ' primary key';
            }

            if (i < length - 1) {
                query += ',';
            }
        }

        query += ');';

        return query;
    }
}