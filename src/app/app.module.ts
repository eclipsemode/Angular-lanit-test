import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LAYOUTS } from './layout';
import { SharedModule } from '@shared/shared.module';

@NgModule({
    declarations: [
        AppComponent,
        ...LAYOUTS
    ],
    imports: [
        CommonModule,
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,

        AppRoutingModule,
        SharedModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
