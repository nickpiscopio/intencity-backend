import { Table } from './table';
import { Column } from './column';
import { ColumnType as Type } from '../../enum/column_type';
import { ColumnType } from './column_type';

/**
 * The model for the UserEquipment table.
 */
export class UserEquipment extends Table {
    private readonly TABLE_NAME = 'user_equipment';

    private readonly ID = 'id';
    private readonly ID_USER = 'id_user';
    private readonly NAME_DISPLAY = 'name_display';
    private readonly NAME_EQUIPMENT = 'name_equipment';
    private readonly LOCATION = 'location';

    constructor() {
        super();

        this.tableName = this.TABLE_NAME;
        this.columns = [
            new Column(this.ID, new ColumnType(Type.serial), false, true),
            new Column(this.ID_USER, new ColumnType(Type.integer), true),
            new Column(this.NAME_DISPLAY, new ColumnType(Type.varchar, 30), false),
            new Column(this.NAME_EQUIPMENT, new ColumnType(Type.varchar, 75), false),
            new Column(this.LOCATION, new ColumnType(Type.varchar, 125), false)
        ];
    }
}