import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as express from 'express';
import * as logger from 'morgan';
import * as errorHandler from 'errorhandler';

import { Database } from './database/database';

import { Account } from './routes/account';
import { IndexRoute } from './routes/index';
import { IndexRoute2 } from './routes/index_2';

/**
 * The server.
 *
 * @class Server
 */
export class Server {
  public app: express.Application;

  /**
   * Bootstrap the application.
   *
   * @return {ng.auto.IInjectorService} Returns the newly created injector for this app.
   */
  public static bootstrap(): Server {
    return new Server();
  }

  /**
   * Constructor.
   */
  constructor() {
    // Create the ExpressJS application.
    this.app = express();

    // Configure the application.
    this.setConfig();

    // Creates a new database instance.
    // this initializes Postgres.
    new Database().createTables();

    // Sets the routes.
    this.setRoutes();
  }

  /**
   * Configures the application.
   */
  public setConfig() {
    // Mount logger.
    this.app.use(logger('dev'));

    // Mount json form parser.
    this.app.use(bodyParser.json());

    // Mount query string parser.
    this.app.use(bodyParser.urlencoded({
      extended: true
    }));

    //mount cookie parser middleware
    this.app.use(cookieParser("SECRET_GOES_HERE"));

    // catch 404 and forward to error handler
    this.app.use(function(err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
        err.status = 404;
        next(err);
    });

    //error handling
    this.app.use(errorHandler());
  }

  /**
   * Create and return Router.
   */
  private setRoutes() {
    let router: express.Router;
    router = express.Router();

    // Create the routes.
    Account.create(router);
    IndexRoute.create(router);
    IndexRoute2.create(router);

    // Use router middleware.
    this.app.use(router);
  }
}