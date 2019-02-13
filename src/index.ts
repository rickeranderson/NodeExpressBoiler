import dotenv from 'dotenv';
import express from 'express';
import path from 'path';

import { Controllers } from './controllers/controllers';
import { Services } from './services/services';

dotenv.config();

const app = express();
const port = process.env.SERVER_PORT; // default port to listen

// Configure Express to use EJS
app.set( 'views', path.join( __dirname, 'views' ) );
app.set( 'view engine', 'ejs' );

const services = new Services();

// define a route handler for the default home page
const controllers = new Controllers(app, services);

// start the Express server
app.listen( port, () => {
    console.log(`environment configuration: ${ process.env.NODE_ENV }`);
    console.log( `server started at http://localhost:${ port }` );
} );
