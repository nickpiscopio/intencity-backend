import { NextFunction, Request, Response, Router } from "express";
import {Database} from '../database/database';
import {User} from '../database/table/user';

/**
 * This is the API route for an account.
 */
export class Account {
    // The routes.
    private static readonly ROOT = '/account';
    private static readonly ROUTE_CREATE = Account.ROOT + '/create';

    /**
    * Create the routes.
    */
    public static create(router: Router) {
        // The route to create an account.
        router.post(Account.ROUTE_CREATE, (req: Request, res: Response, next: NextFunction) => {
            let body = req.body;

            new Database().query(new User().insert(body.email, body.password, body.first_name, body.last_name, body.account_type));
            let response = {
                success: true,
                message: "STARTED SUCCESSFULLY!"
            };

            res.send(response);
        });
    }
}
