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
        // Get all contacts
        app.route('/contact').get(this.contactController.getContacts)
        // Create a new contact
        app.route('/contact').post(this.contactController.addNewContact)
        // Contact detail
        app.route('/contact/:contactId').get(this.contactController.getContactWithId)
        // Update a contact
        app.route('/contact/:contactId').put(this.contactController.updateContact)
        // Delete a contact
        app.route('/contact/:contactId').delete(this.contactController.deleteContact)
    }
}