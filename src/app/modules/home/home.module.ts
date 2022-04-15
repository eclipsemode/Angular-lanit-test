import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeRoutingModule } from './home-routing.module';
import { HomeServicesModule } from './home-services.module';

import { SharedModule } from '@shared/shared.module';
import { PAGES } from './pages';

@NgModule({
    declarations: [
        ...PAGES
    ],
    exports: [],
    imports: [
        CommonModule,
        RouterModule,

        HomeServicesModule,
        HomeRoutingModule,
        SharedModule
    ],
    providers: []
})
export class HomeModule { }
