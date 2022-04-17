import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '@app/layout';
import { ModulesInfo } from '@app/modules';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./modules/home/home.module').then(module => module.HomeModule),
                data: { module: ModulesInfo.home.name }
            },
            {
                path: 'reservation',
                loadChildren: () => import('./modules/reservation/reservation.module').then(module => module.ReservationModule),
                data: {module: ModulesInfo.reservation.name}
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
