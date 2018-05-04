import { Table } from './table';
import { Column } from './column';
import { ColumnType as Type } from '../../enum/column_type';
import { ColumnType } from './column_type';

/**
 * The model for the MuscleGroup table.
 */
export class MuscleGroup extends Table {
    private readonly TABLE_NAME = 'muscle_group';

    private readonly ID = 'id';
    private readonly ID_EXERCISE = 'id_exercise';
    private readonly NAME_MUSCLE_GROUP = 'name_muscle_group';
    private readonly MUSCLE_GROUP_EXERCISE_PERCENTAGE = 'muscle_group_exercise_percentage';

    constructor() {
        super();

        this.tableName = this.TABLE_NAME;
        this.columns = [
            new Column(this.ID, new ColumnType(Type.serial), false, true),
            new Column(this.ID_EXERCISE, new ColumnType(Type.integer), true),
            new Column(this.NAME_MUSCLE_GROUP, new ColumnType(Type.varchar, 25), false),
            new Column(this.MUSCLE_GROUP_EXERCISE_PERCENTAGE, new ColumnType(Type.integer), true)
        ];
    }
}