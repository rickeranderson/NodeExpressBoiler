import { Express } from 'express';
import { Services } from '../../services/services';

export class HelloWorldController {

    constructor(private app: Express, private services: Services) {

        app.get( '/hello', ( req, res ) => {

            res.send( services.testService.getText() );
        } );
    }

}
