import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '@home/pages';
import { ModulesInfo } from '../index';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        data: { mode: ModulesInfo.home.name, needNavigationInsideTheModule: false}
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ]
})
export class HomeRoutingModule { }
