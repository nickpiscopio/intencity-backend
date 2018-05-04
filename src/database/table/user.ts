import { Table } from './table';
import { Column } from './column';
import { ColumnType as Type } from '../../enum/column_type';
import { ColumnType } from './column_type';

/**
 * The model for the User table.
 */
export class User extends Table {
    private readonly TABLE_NAME = 'user_list';

    private readonly ID = 'id';
    private readonly EMAIL = 'email';
    private readonly PASSWORD = 'password';
    private readonly DATE_CREATED = 'date_created';
    private readonly DATE_LAST_LOGIN = 'date_last_login';
    private readonly DATE_EARNED_FITNESS_POINTS = 'date_earned_fitness_points';
    private readonly NAME_FIRST = 'name_first';
    private readonly NAME_LAST = 'name_last';
    private readonly ACCOUNT_TYPE = 'account_type';
    private readonly POINTS_EARNED = 'points_earned';

    constructor() {
        super();

        this.tableName = this.TABLE_NAME;
        this.columns = [
            new Column(this.ID, new ColumnType(Type.serial), false, true),
            new Column(this.EMAIL, new ColumnType(Type.varchar, 75), false),
            new Column(this.PASSWORD, new ColumnType(Type.varchar, 75), false),
            new Column(this.DATE_CREATED, new ColumnType(Type.bigint), false),
            new Column(this.DATE_LAST_LOGIN, new ColumnType(Type.bigint), false),
            new Column(this.DATE_EARNED_FITNESS_POINTS, new ColumnType(Type.bigint), false),
            new Column(this.NAME_FIRST, new ColumnType(Type.varchar, 30), false),
            new Column(this.NAME_LAST, new ColumnType(Type.varchar, 30), false),
            new Column(this.ACCOUNT_TYPE, new ColumnType(Type.char), false),
            new Column(this.POINTS_EARNED, new ColumnType(Type.integer), false)
        ];
    }
}