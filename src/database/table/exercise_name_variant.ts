import { Table } from './table';
import { Column } from './column';
import { ColumnType as Type } from '../../enum/column_type';
import { ColumnType } from './column_type';

/**
 * The model for the ExerciseNameVariant table.
 */
export class ExerciseNameVariant extends Table {
    private readonly TABLE_NAME = 'exercise_name_variant';

    private readonly ID = 'id';
    private readonly NAME_EXERCISE = 'name_exercise';
    private readonly NAME_VARIANT = 'name_variant';

    constructor() {
        super();

        this.tableName = this.TABLE_NAME;
        this.columns = [
            new Column(this.ID, new ColumnType(Type.serial), false, true),
            new Column(this.NAME_EXERCISE, new ColumnType(Type.varchar, 50), false),
            new Column(this.NAME_VARIANT, new ColumnType(Type.varchar, 50), false)
        ];
    }
}