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
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
