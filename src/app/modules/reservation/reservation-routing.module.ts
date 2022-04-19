import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { HomeComponent } from '@home/pages';
import { ModulesInfo } from '../index';
import {ReservationComponent} from "./pages/";

const routes: Routes = [
    {
        path: '',
        component: ReservationComponent,
        data: { mode: ModulesInfo.reservation.name, needNavigationInsideTheModule: false}
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ]
})
export class ReservationRoutingModule { }
