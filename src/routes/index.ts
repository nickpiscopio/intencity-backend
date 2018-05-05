import { NextFunction, Request, Response, Router } from "express";

/**
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
      let response = {
        success: true,
        message: "STARTED SUCCESSFULLY!"
      };

      res.send(response);
    });

    //add default route
    router.get("/route1", (req: Request, res: Response, next: NextFunction) => {
      let response = {
        success: true,
        message: "STARTED ROUTE1 SUCCESSFULLY!"
      };

      res.send(response);
    });
  }
}
