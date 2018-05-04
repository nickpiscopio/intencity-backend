import { Table } from './table';
import { Column } from './column';
import { ColumnType as Type } from '../../enum/column_type';
import { ColumnType } from './column_type';

/**
 * The model for the Following table.
 */
export class Following extends Table {
    private readonly TABLE_NAME = 'following';

    private readonly ID = 'id';
    private readonly ID_USER = 'id_user';
    private readonly FOLLOWING = 'following';

    constructor() {
        super();

        this.tableName = this.TABLE_NAME;
        this.columns = [
            new Column(this.ID, new ColumnType(Type.serial), false, true),
            new Column(this.ID_USER, new ColumnType(Type.integer), true),
            new Column(this.FOLLOWING, new ColumnType(Type.varchar, 75), false)
        ];
    }
}