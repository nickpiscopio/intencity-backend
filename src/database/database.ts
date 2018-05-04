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

  /**
   * Constructor to create the database.
   */
    constructor() {
        // Preparing the connection details:
        // const cn = 'postgres://username:password@host:port/database';
        const cn = 'postgres://' + this.USER + ':' + this.PASSWORD + '@' + Network.IP + ':' + Network.PORT + '/' + this.DATABASE_NAME;

        // Creating a new database instance from the connection details:
        const db = pgp(cn);

        db.query(new Badge().getCreateTableQuery());
        db.query(new CompletedExercise().getCreateTableQuery());
        db.query(new CompletedMuscleGroup().getCreateTableQuery());
        db.query(new CompletedRoutine().getCreateTableQuery());
        db.query(new CompletedRoutineMuscleGroup().getCreateTableQuery());
        db.query(new Direction().getCreateTableQuery());
        db.query(new Equipment().getCreateTableQuery());
        db.query(new Exclusion().getCreateTableQuery());
        db.query(new Exercise().getCreateTableQuery());
        db.query(new ExerciseNameVariant().getCreateTableQuery());
        db.query(new ExercisePriority().getCreateTableQuery());
        db.query(new Following().getCreateTableQuery());
        db.query(new Muscle().getCreateTableQuery());
        db.query(new MuscleGroup().getCreateTableQuery());
        db.query(new MuscleGroupRoutine().getCreateTableQuery());
        db.query(new Routine().getCreateTableQuery());
        db.query(new User().getCreateTableQuery());
        db.query(new UserEquipment().getCreateTableQuery());
        db.query(new UserMuscleGroupRoutine().getCreateTableQuery());
    }
}