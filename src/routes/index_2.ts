import { NextFunction, Request, Response, Router } from "express";

/**
 * @class IndexRoute
 */
export class IndexRoute2 {

  /**
   * Create the routes.
   *
   * @class IndexRoute
   * @method create
   * @static
   */
  public static create(router: Router) {
    //log
    console.log("[IndexRoute2::create] Creating index route.");

    //add default route
    router.get("/route2", (req: Request, res: Response, next: NextFunction) => {
      let response = {
        success: true,
        message: "STARTED ROUTE 2 SUCCESSFULLY!"
      };

      res.send(response);
    });
  }
}
