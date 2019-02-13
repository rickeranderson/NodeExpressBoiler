import { Express } from 'express';
import { Services } from '../services/services';
import { HelloWorldController } from './hello-world/hello-world.controller';
import { ViewRoutesController } from './view-routes/view-routes.controller';

export class Controllers {
    public controllers: any[] = [];
    private helloWorldController: HelloWorldController;
    private viewRoutesController: ViewRoutesController;

    constructor(private app: Express, private services: Services) {
        console.log('Generating controllers...');
        this.importControllers();
    }

    public importControllers() {
        this.helloWorldController = new HelloWorldController(this.app, this.services);
        this.viewRoutesController = new ViewRoutesController(this.app, this.services);
    }

}
