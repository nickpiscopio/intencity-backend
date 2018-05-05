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

            if (!column.nullable) {
                query += ' not null';
            }

            if (column.primary) {
                query += ' primary key';
            }

            if (i < length - 1) {
                query += ',';
            }
        }

        query += ');';

        return query;
    }

    /**
     * Gets the insert query to insert a record into the database.
     *
     * @param insert    The record to insert into the database.
     *                  This is represented as a JSON object.
     *
     * @return {string} The insert query to insert a record into the database.
     */
    getInsertQuery(insert: any) {
        let columns = '';
        let values = '';

        for (let key in insert) {
            if (columns.length > 0) {
                columns += ',';
                values += ',';
            }

            columns += key;
            values +=  "'" + insert[key] + "'";
        }

        return 'insert into ' + this.tableName + '(' + columns + ') values (' + values + ');';
    }
}