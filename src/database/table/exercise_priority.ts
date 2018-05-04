import { Table } from './table';
import { Column } from './column';
import { ColumnType as Type } from '../../enum/column_type';
import { ColumnType } from './column_type';

/**
 * The model for the ExercisePriority table.
 */
export class ExercisePriority extends Table {
    private readonly TABLE_NAME = 'exercise_priority';

    private readonly ID = 'id';
    private readonly ID_USER = 'id_user';
    private readonly ID_EXERCISE = 'id_exercise';
    private readonly PRIORITY = 'priority';

    constructor() {
        super();

        this.tableName = this.TABLE_NAME;
        this.columns = [
            new Column(this.ID, new ColumnType(Type.serial), false, true),
            new Column(this.ID_USER, new ColumnType(Type.integer), true),
            new Column(this.ID_EXERCISE, new ColumnType(Type.integer), true),
            new Column(this.PRIORITY, new ColumnType(Type.integer), false)
        ];
    }
}