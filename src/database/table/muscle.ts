import { Table } from './table';
import { Column } from './column';
import { ColumnType as Type } from '../../enum/column_type';
import { ColumnType } from './column_type';

/**
 * The model for the Muscle table.
 */
export class Muscle extends Table {
    private readonly TABLE_NAME = 'muscle';

    private readonly ID = 'id';
    private readonly ID_EXERCISE = 'id_exercise';
    private readonly NAME_MUSCLE = 'name_muscle';

    constructor() {
        super();

        this.tableName = this.TABLE_NAME;
        this.columns = [
            new Column(this.ID, new ColumnType(Type.serial), false, true),
            new Column(this.ID_EXERCISE, new ColumnType(Type.integer), true),
            new Column(this.NAME_MUSCLE, new ColumnType(Type.varchar, 47), false)
        ];
    }
}