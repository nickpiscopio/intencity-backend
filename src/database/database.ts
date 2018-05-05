import { Network } from '../constant/network';
import { User } from './table/user';
import { Badge } from './table/badge';
import { CompletedExercise } from './table/completed_exercise';
import { CompletedMuscleGroup } from './table/completed_muscle_group';
import { CompletedRoutine } from './table/completed_routine';
import { CompletedRoutineMuscleGroup } from './table/completed_routine_muscle_group';
import { Direction } from './table/direction';
import { Equipment } from './table/equipment';
import { Exclusion } from './table/exclusion';
import { Exercise } from './table/exercise';
import { ExerciseNameVariant } from './table/exercise_name_variant';
import { ExercisePriority } from './table/exercise_priority';
import { Following } from './table/following';
import { Muscle } from './table/muscle';
import { MuscleGroup } from './table/muscle_group';
import { MuscleGroupRoutine } from './table/muscle_group_routine';
import { Routine } from './table/routine';
import { UserEquipment } from './table/user_equipment';
import { UserMuscleGroupRoutine } from './table/user_muscle_group_routine';

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

    // Preparing the connection details:
    // const cn = 'postgres://username:password@host:port/database';
    private readonly connection = 'postgres://' + this.USER + ':' + this.PASSWORD + '@' + Network.DATABASE_IP + ':' + Network.DATABASE_PORT + '/' + this.DATABASE_NAME;

    /**
     * Constructor to create the database.
     */
    constructor() {
        this.createTables();
    }

    /**
     * Creates the tables for Intencity if they haven't been created yet.
     */
    createTables() {
        // The create table query to create all the Intencity tables.
        const createQuery = new Badge().getCreateTableQuery() +
                            new CompletedExercise().getCreateTableQuery() +
                            new CompletedMuscleGroup().getCreateTableQuery() +
                            new CompletedRoutine().getCreateTableQuery() +
                            new CompletedRoutineMuscleGroup().getCreateTableQuery() +
                            new Direction().getCreateTableQuery() +
                            new Equipment().getCreateTableQuery() +
                            new Exclusion().getCreateTableQuery() +
                            new Exercise().getCreateTableQuery() +
                            new ExerciseNameVariant().getCreateTableQuery() +
                            new ExercisePriority().getCreateTableQuery() +
                            new Following().getCreateTableQuery() +
                            new Muscle().getCreateTableQuery() +
                            new MuscleGroup().getCreateTableQuery() +
                            new MuscleGroupRoutine().getCreateTableQuery() +
                            new Routine().getCreateTableQuery() +
                            new User().getCreateTableQuery() +
                            new UserEquipment().getCreateTableQuery() +
                            new UserMuscleGroupRoutine().getCreateTableQuery();

        // Call the query function to create the tables if they haven't been created yet.
        this.query(createQuery);
    }

    /**
     * Queries the database and then closes the connection when it's done.
     *
     * @param {string} query    The query to query the database.
     */
    private query(query: string) {
        // Creating a new database instance from the connection details:
        const db = pgp(this.connection);

        db.query(query);

        // Ends the connection because it isn't needed anymore.
        pgp.end();
    }
}