import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ReservationRoutingModule } from './reservation-routing.module';
// import { HomeServicesModule } from './home-services.module';

import { SharedModule } from '@shared/shared.module';
import { PAGES } from './pages';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        ...PAGES
    ],
    exports: [],
    imports: [
        CommonModule,
        RouterModule,

        // HomeServicesModule,
        ReservationRoutingModule,
        SharedModule,
        ReactiveFormsModule,
        FormsModule
    ],
    providers: []
})
export class ReservationModule { }
