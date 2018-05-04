import { Table } from './table';
import { Column } from './column';
import { ColumnType as Type } from '../../enum/column_type';
import { ColumnType } from './column_type';

/**
 * The model for the UserMuscleGroupRoutine table.
 */
export class UserMuscleGroupRoutine extends Table {
    private readonly TABLE_NAME = 'user_muscle_group_routine';

    private readonly ID = 'id';
    private readonly ID_USER = 'id_user';
    private readonly NAME_MUSCLE_GROUP = 'name_muscle_group';
    private readonly ROUTINE_NUMBER = 'routine_number';
    private readonly NAME_DISPLAY = 'name_display';

    constructor() {
        super();

        this.tableName = this.TABLE_NAME;
        this.columns = [
            new Column(this.ID, new ColumnType(Type.serial), false, true),
            new Column(this.ID_USER, new ColumnType(Type.integer), false),
            new Column(this.NAME_MUSCLE_GROUP, new ColumnType(Type.varchar, 25), false),
            new Column(this.ROUTINE_NUMBER, new ColumnType(Type.integer), false),
            new Column(this.NAME_DISPLAY, new ColumnType(Type.varchar, 100), false)
        ];
    }
}