import { Express } from 'express';
import { Services } from '../../services/services';

export class ViewRoutesController {

    constructor(private app: Express, private services: Services) {

        app.get( '/', ( req, res ) => {

            res.render('index');
        } );
    }

}
