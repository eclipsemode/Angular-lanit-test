import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule }   from '@angular/common/http';

import { ReservationRoutingModule } from './reservation-routing.module';

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

        ReservationRoutingModule,
        SharedModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule
    ],
    providers: []
})
export class ReservationModule { }
