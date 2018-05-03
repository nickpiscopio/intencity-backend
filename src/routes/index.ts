import { NextFunction, Request, Response, Router } from "express";
import { BaseRoute } from "./route";

/**
 * / route
 *
 * @class IndexRoute
 */
export class IndexRoute {

  /**
   * Create the routes.
   *
   * @class IndexRoute
   * @method create
   * @static
   */
  public static create(router: Router) {
    //log
    console.log("[IndexRoute::create] Creating index route.");

    //add default route
    router.get("/", (req: Request, res: Response, next: NextFunction) => {
      //new IndexRoute().index(req, res, next);
     
      let response = {
        success: true,
        message: "STARTED SUCCESSFULLY!"
      };

      res.send(response);
    });

    //add default route
    router.get("/route1", (req: Request, res: Response, next: NextFunction) => {
      //new IndexRoute().index(req, res, next);
     
      let response = {
        success: true,
        message: "STARTED ROUTE1 SUCCESSFULLY!"
      };

      res.send(response);
    });
  }

  /**
   * Constructor
   *
   * @class IndexRoute
   * @constructor
   */
  constructor() {
    //super();
  }
}
