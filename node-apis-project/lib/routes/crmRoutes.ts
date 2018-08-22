import {Request, Response} from "express";
import { ContactController } from "../controllers/crmController";


export class Routes {

    public contactController: ContactController = new ContactController();

    public routes(app) : void {

        app.route('/')
        .get((req: Request, res:Response) => {
            res.status(200).send({
                message: 'Get request successful!!!!'
            })
        })
        // Contact
        app.route('/contact')
        // GET endpoint
        .get((req: Request, res: Response) => {
        // Get all contacts
            res.status(200).send({
                message: 'GET request sucessfull!!!!'
            })
        })
        // POST endpoint
        .post((req: Request, res: Response) => {
        // Create new contact
            app.route('/contact').post(this.contactController.addNewContact);
            res.status(200).send({
                message: 'POST request successfull!!'
            })
        })

        // Contact detail
        app.route('/contact/:contactId')
        // get specific contact
        .get((req: Request, res: Response) => {
        // Get a single contact detail
            app.route('/contact/:contactId').get(this.contactController.getContactWithId)
            res.status(200).send({
                message: 'GET request successfull!!!'
            })
        })
        .put((req: Request, res: Response) => {
        // Update a contact

            res.status(200).send({
                message: 'PUT request sucessfull!!!!'
            })
        })
        .delete((req: Request, res: Response) => {
        // Delete a contact
            res.status(200).send({
                message: 'DELETE request sucessfull!!!!'
            })
        })
    }
}