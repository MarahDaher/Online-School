import { HttpClient } from "@angular/common/http";
import { Injector } from "@angular/core";
import { UtilityService } from "../services/utility.service";


export abstract class BaseComponent {

    //#region variables
    utility: UtilityService
    HttpClient: HttpClient;
    
    constructor(injector: Injector) {
        this.utility = injector.get(UtilityService);
        this.HttpClient = injector.get(HttpClient);

    }
}