import { Table } from './table';
import { Column } from './column';
import { ColumnType as Type } from '../../enum/column_type';
import { ColumnType } from './column_type';

/**
 * The model for the Routine table.
 */
export class Routine extends Table {
    private readonly TABLE_NAME = 'routine';

    private readonly ID = 'id';
    private readonly ID_USER = 'id_user';
    private readonly NAME_ROUTINE = 'name_routine';
    private readonly EXERCISE_DAY = 'exercise_day';
    private readonly ID_EXERCISE = 'id_exercise';

    constructor() {
        super();

        this.tableName = this.TABLE_NAME;
        this.columns = [
            new Column(this.ID, new ColumnType(Type.serial), false, true),
            new Column(this.ID_USER, new ColumnType(Type.integer), true),
            new Column(this.NAME_ROUTINE, new ColumnType(Type.varchar, 30), false),
            new Column(this.EXERCISE_DAY, new ColumnType(Type.smallint), false),
            new Column(this.ID_EXERCISE, new ColumnType(Type.integer), true)
        ];
    }
}