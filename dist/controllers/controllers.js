"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hello_world_controller_1 = require("./helloworld/hello-world-controller");
class Controllers {
    constructor(app) {
        this.app = app;
        this.controllers = [];
        // tslint:disable-next-line:no-console
        console.log("Generating controllers...");
        this.importControllers();
    }
    importControllers() {
        this.controllers.push(new hello_world_controller_1.HelloWorldController(this.app));
    }
}
exports.Controllers = Controllers;
//# sourceMappingURL=controllers.js.map