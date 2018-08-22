import {Request, Response} from "express";

export class Routes {
    public routes(app) : void {
        app.route('/')
        .get((req: Request, res:Response) => {
            res.status(200).send({
                message: 'Get request successful!!!!'
            })
        })
        // Contract
        app.route('/contract')
        // GET endpoint
        .get((req: Request, res: Response) => {
        // Get all contacts
            res.status(200).send({
                message: 'GET request sucessfull!!!!'
            })
        })
        // POST endpoint
        .post((req: Request, res: Response) => {
        // Create new contract
            res.status(200).send({
                message: 'POST request successfull!!'
            })
        })

        // Contract detail
        app.route('/contract/:contractId')
        // get specific contract
        .get((req: Request, res: Response) => {
        // Get a single contract detail
            res.status(200).send({
                message: 'GET request successfull!!!'
            })
        })
        .put((req: Request, res: Response) => {
        // Update a contract
            res.status(200).send({
                message: 'PUT request sucessfull!!!!'
            })
        })
        .delete((req: Request, res: Response) => {
        // Delete a contract
            res.status(200).send({
                message: 'DELETE request sucessfull!!!!'
            })
        })
    }
}