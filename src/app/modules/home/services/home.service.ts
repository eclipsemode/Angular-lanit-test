import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { HomeServicesModule } from '@home/home-services.module';
import { AppUrlService } from './app-url.service';
import { BlockLinkModel } from '@shared/models';

@Injectable({
    providedIn: HomeServicesModule
})
export class HomeService {

    constructor(private http: HttpClient, private urls: AppUrlService) { }

    loadInfo(): Observable<BlockLinkModel[]> {
        // const url = this.urls.loadInfo();
        // return this.http.get<{ payload: BlockLinkModel[] }>(url).pipe(
        //     map(x => x.payload)
        // );
        return of([
            {
                text: 'О компании',
                link: 'index.html'
            },
            {
                text: 'База знаний',
                link: 'index.html',
                image: 'assets/img/knowledge_base.png'
            },
            {
                text: 'Новому сотруднику',
                link: 'index.html',
                image: 'assets/img/new_colleague.png'
            },
            {
                text: 'Обучение',
                link: 'index.html',
                image: 'assets/img/learning.png'
            },
            {
                text: 'Заявки и заявления',
                link: 'index.html'
            },
            {
                text: 'Охрана труда',
                link: 'index.html'
            },
            {
                text: 'ДМС',
                link: 'index.html',
                image: 'assets/img/dms.png'
            }
        ]);
    }
}
