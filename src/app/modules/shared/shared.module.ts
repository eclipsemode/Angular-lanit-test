import { COMPONENTS } from './components';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WeatherService } from '@shared/services';


@NgModule({
    declarations: [
        ...COMPONENTS
    ],
    exports: [
        ...COMPONENTS
    ],
    entryComponents: [],
    imports: [
        NgbModule,
        CommonModule,
        FormsModule
    ],
    providers: [
        WeatherService
    ]
})
export class SharedModule { }
