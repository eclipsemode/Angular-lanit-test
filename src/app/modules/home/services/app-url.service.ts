import { Injectable } from '@angular/core';

import { HomeServicesModule } from '@home/home-services.module';

@Injectable({
    providedIn: HomeServicesModule
})
export class AppUrlService {

    constructor() { }

    loadInfo(): string {
        return ``;
    }
}
