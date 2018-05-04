import { Table } from './table';
import { Column } from './column';
import { ColumnType as Type } from '../../enum/column_type';
import { ColumnType } from './column_type';

/**
 * The model for the Exclusion table.
 */
export class Exclusion extends Table {
    private readonly TABLE_NAME = 'exclusion';

    private readonly ID = 'id';
    private readonly ID_USER = 'id_user';
    private readonly ID_EXERCISE = 'id_exercise';
    private readonly EXCLUDE_FOREVER = 'exclude_forever';
    private readonly EXCLUSION_TYPE = 'exclusion_type';

    constructor() {
        super();

        this.tableName = this.TABLE_NAME;
        this.columns = [
            new Column(this.ID, new ColumnType(Type.serial), false, true),
            new Column(this.ID_USER, new ColumnType(Type.integer), true),
            new Column(this.ID_EXERCISE, new ColumnType(Type.integer), true),
            new Column(this.EXCLUDE_FOREVER, new ColumnType(Type.char), false),
            new Column(this.EXCLUSION_TYPE, new ColumnType(Type.char), false)
        ];
    }
}