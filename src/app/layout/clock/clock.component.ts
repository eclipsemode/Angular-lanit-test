import { Component, Input, OnInit } from '@angular/core';

import * as moment from 'moment';

class HandsModel {
    second: string;
    minute: string;
    hour: string;

    constructor() {
        this.second = '';
        this.minute = '';
        this.hour = '';
    }
}

@Component({
    selector: 'app-clock',
    templateUrl: './clock.component.html'
})
export class ClockComponent implements OnInit {

    @Input() timeZone: number;

    hands: {
        minute: string,
        hour: string,
    };

    constructor() { }

    ngOnInit(): void {
        this.hands = new HandsModel();
        setInterval(() => this.setDate(this.hands), 1000);
        this.setDate(this.hands);
    }

    setDate(hands): void {
        const now = moment().utcOffset(this.timeZone);

        const seconds = now.second();

        const mins = now.minute();
        const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
        hands.minute = `rotate(${minsDegrees}deg)`;

        const hour = now.hour();
        const hourDegrees = ((hour / 12) * 360) + ((mins / 60) * 30) + 90;
        hands.hour = `rotate(${hourDegrees}deg)`;
    }

}
