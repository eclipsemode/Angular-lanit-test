import { Component, Input, OnInit } from '@angular/core';

import * as moment from 'moment';
import { CitiesTimeZone } from '@shared/models';

@Component({
    selector: 'app-time',
    templateUrl: './time.component.html'
})
export class TimeComponent implements OnInit {

    @Input() city: string;
    @Input() text: string;

    timeZone: number;

    constructor() { }

    ngOnInit(): void {
        this.timeZone = CitiesTimeZone[this.city];
    }

    getTime(): string {
        return moment().utcOffset(this.timeZone).format('HH:mm');
    }

}
