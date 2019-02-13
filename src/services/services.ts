import { TestService } from './test.service';

export class Services {
    public testService: TestService;

    constructor() {
        console.log('Generating services...');
        this.importServices();
    }

    public importServices() {
        this.testService = new TestService();
    }
}
