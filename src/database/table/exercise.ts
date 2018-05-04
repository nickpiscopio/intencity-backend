import { Table } from './table';
import { Column } from './column';
import { ColumnType as Type } from '../../enum/column_type';
import { ColumnType } from './column_type';

/**
 * The model for the Exercise table.
 */
export class Exercise extends Table {
    private readonly TABLE_NAME = 'exercise';

    private readonly ID = 'id';
    private readonly NAME_EXERCISE = 'name_exercise';
    private readonly TYPE = 'type';
    private readonly SUBMITTED_BY = 'submitted_by';
    private readonly RECOMMENDED = 'recommended';
    private readonly VIDEO_URL = 'video_url';

    constructor() {
        super();

        this.tableName = this.TABLE_NAME;
        this.columns = [
            new Column(this.ID, new ColumnType(Type.serial), false, true),
            new Column(this.NAME_EXERCISE, new ColumnType(Type.varchar, 50), false),
            new Column(this.TYPE, new ColumnType(Type.char), false),
            new Column(this.SUBMITTED_BY, new ColumnType(Type.varchar, 75), false),
            new Column(this.RECOMMENDED, new ColumnType(Type.char), false),
            new Column(this.VIDEO_URL, new ColumnType(Type.varchar, 150), true)
        ];
    }
}