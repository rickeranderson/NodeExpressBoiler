import { Express } from "express";
import { HelloWorldController } from "./helloworld/hello-world-controller";

export class Controllers {
    public controllers: any[] = [];

    constructor(private app: Express) {
        // tslint:disable-next-line:no-console
        console.log("Generating controllers...");
        this.importControllers();
    }

    public importControllers() {
        this.controllers.push(new HelloWorldController(this.app));
    }

}
