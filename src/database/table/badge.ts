import { Table } from './table';
import { Column } from './column';
import { ColumnType as Type } from '../../enum/column_type';
import { ColumnType } from './column_type';

/**
 * The model for the Badge table.
 */
export class Badge extends Table {
    private readonly TABLE_NAME = 'badge';

    private readonly ID = 'id';
    private readonly ID_USER = 'id_user';
    private readonly DATE_EARNED = 'date_earned';
    private readonly NAME_BADGE = 'name_badge';

    constructor() {
        super();

        this.tableName = this.TABLE_NAME;
        this.columns = [
            new Column(this.ID, new ColumnType(Type.serial), true),
            new Column(this.ID_USER, new ColumnType(Type.integer), false),
            new Column(this.DATE_EARNED, new ColumnType(Type.bigint), false),
            new Column(this.NAME_BADGE, new ColumnType(Type.varchar, 30), false)
        ];
    }
}