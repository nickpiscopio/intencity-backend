import { Table } from './table';
import { Column } from './column';
import { ColumnType as Type } from '../../enum/column_type';
import { ColumnType } from './column_type';

/**
 * The model for the CompletedRoutine table.
 */
export class CompletedRoutineMuscleGroup extends Table {
    private readonly TABLE_NAME = 'completed_routine_muscle_group';

    private readonly ID = 'id';
    private readonly NAME_MUSCLE_GROUP = 'name_muscle_group';
    private readonly NAME_DISPLAY = 'NAME_DISPLAY';

    constructor() {
        super();

        this.tableName = this.TABLE_NAME;
        this.columns = [
            new Column(this.ID, new ColumnType(Type.serial), false, true),
            new Column(this.NAME_MUSCLE_GROUP, new ColumnType(Type.varchar, 25), false),
            new Column(this.NAME_DISPLAY, new ColumnType(Type.varchar, 25), false)
        ];
    }
}