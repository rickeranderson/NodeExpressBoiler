"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HelloWorldController {
    constructor(app) {
        this.app = app;
        app.get("/", (req, res) => {
            res.send("Hello world!");
        });
    }
}
exports.HelloWorldController = HelloWorldController;
//# sourceMappingURL=hello-world-controller.js.map