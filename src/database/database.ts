import { Network } from '../constant/network';
import { User } from './table/user';
import { Badge } from './table/badge';

// This is the library to connect to postgres.
// Documentation: http://vitaly-t.github.io/pg-promise/index.html
const pgp = require('pg-promise')();

/**
 * The class to create and edit the database.
 */
export class Database {
    private readonly DATABASE_NAME = 'intencity';
    private readonly USER = 'intencit';
    private readonly PASSWORD = 'Fkw8ywJ267';

  /**
   * Constructor to create the database.
   */
    constructor() {
        // Preparing the connection details:
        // const cn = 'postgres://username:password@host:port/database';
        const cn = 'postgres://' + this.USER + ':' + this.PASSWORD + '@' + Network.IP + ':' + Network.PORT + '/' + this.DATABASE_NAME;

        // Creating a new database instance from the connection details:
        const db = pgp(cn);

        db.query(new User().getCreateTableQuery());
        db.query(new Badge().getCreateTableQuery());
    }
}