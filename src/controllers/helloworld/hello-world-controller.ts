import { Express } from "express";

export class HelloWorldController {

    constructor(private app: Express) {

        app.get( "/", ( req, res ) => {
            res.send( "Hello world!" );
        } );
    }

}
