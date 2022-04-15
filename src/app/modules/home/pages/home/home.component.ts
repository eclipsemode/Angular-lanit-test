import { Component, OnInit } from '@angular/core';

import { BlockLinkModel } from '@shared/models';
import { HomeService } from '@home/services';
import { catchError, map } from 'rxjs/operators';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

    blocks: BlockLinkModel[];

    constructor(private homeService: HomeService) {}

    ngOnInit(): void {
        this.homeService.loadInfo().pipe(
            map(data => {
                this.blocks = data;
            }),
            catchError(error => {
                console.error(error);
                return [];
            })
        ).subscribe();
    }
}
