import { Table } from './table';
import { Column } from './column';
import { ColumnType as Type } from '../../enum/column_type';
import { ColumnType } from './column_type';

/**
 * The model for the CompletedExercise table.
 */
export class CompletedExercise extends Table {
    private readonly TABLE_NAME = 'completed_exercise';

    private readonly ID = 'id';
    private readonly ID_USER = 'id_user';
    private readonly ID_SESSION = 'id_session';
    private readonly DATE = 'date';
    private readonly ID_EXERCISE = 'id_exercise';
    private readonly EXERCISE_WEIGHT = 'exercise_weight';
    private readonly EXERCISE_REPS = 'exercise_reps';
    private readonly EXERCISE_DURATION = 'exercise_duration';
    private readonly EXERCISE_DIFFICULTY = 'exercise_difficulty';
    private readonly NOTES = 'notes';

    constructor() {
        super();

        this.tableName = this.TABLE_NAME;
        this.columns = [
            new Column(this.ID, new ColumnType(Type.serial), false, true),
            new Column(this.ID_USER, new ColumnType(Type.integer), false),
            new Column(this.ID_SESSION, new ColumnType(Type.integer), true),
            new Column(this.DATE, new ColumnType(Type.bigint), true),
            new Column(this.ID_EXERCISE, new ColumnType(Type.integer), true),
            new Column(this.EXERCISE_WEIGHT, new ColumnType(Type.decimal), true),
            new Column(this.EXERCISE_REPS, new ColumnType(Type.smallint), true),
            new Column(this.EXERCISE_DURATION, new ColumnType(Type.varchar, 8), true),
            new Column(this.EXERCISE_DIFFICULTY, new ColumnType(Type.smallint), true),
            new Column(this.NOTES, new ColumnType(Type.varchar, 255), true)
        ];
    }
}