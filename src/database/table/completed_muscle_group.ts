import { Table } from './table';
import { Column } from './column';
import { ColumnType as Type } from '../../enum/column_type';
import { ColumnType } from './column_type';

/**
 * The model for the CompletedMuscleGroup table.
 */
export class CompletedMuscleGroup extends Table {
    private readonly TABLE_NAME = 'completed_muscle_group';

    private readonly ID = 'id';
    private readonly ID_USER = 'id_user';
    private readonly DATE = 'date';
    private readonly NAME_MUSCLE_GROUP = 'name_muscle_group';
    private readonly ROUTINE_NUMBER = 'routine_number';

    constructor() {
        super();

        this.tableName = this.TABLE_NAME;
        this.columns = [
            new Column(this.ID, new ColumnType(Type.serial), false,true),
            new Column(this.ID_USER, new ColumnType(Type.integer), true),
            new Column(this.DATE, new ColumnType(Type.bigint), false),
            new Column(this.NAME_MUSCLE_GROUP, new ColumnType(Type.varchar, 25), false),
            new Column(this.ROUTINE_NUMBER, new ColumnType(Type.integer), false)
        ];
    }
}