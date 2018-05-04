import { Table } from './table';
import { Column } from './column';
import { ColumnType as Type } from '../../enum/column_type';
import { ColumnType } from './column_type';

/**
 * The model for the Direction table.
 */
export class Direction extends Table {
    private readonly TABLE_NAME = 'direction';

    private readonly ID = 'id';
    private readonly ID_EXERCISE = 'id_exercise';
    private readonly DIRECTION = 'direction';

    constructor() {
        super();

        this.tableName = this.TABLE_NAME;
        this.columns = [
            new Column(this.ID, new ColumnType(Type.serial), false, true),
            new Column(this.ID_EXERCISE, new ColumnType(Type.integer), true),
            new Column(this.DIRECTION, new ColumnType(Type.varchar, 255), false)
        ];
    }
}