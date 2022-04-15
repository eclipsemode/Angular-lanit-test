import { Component, Input, OnInit } from '@angular/core';
import { Weather } from '@shared/models';

@Component({
    selector: 'app-weather',
    templateUrl: './weather.component.html'
})
export class WeatherComponent implements OnInit {

    @Input() weather: Weather;
    @Input() text: string;

    weatherTypes = {
        200: 'thunderstorm',
        201: 'thunderstorm',
        202: 'thunderstorm',
        210: 'thunderstorm',
        211: 'thunderstorm',
        212: 'thunderstorm',
        221: 'thunderstorm',
        230: 'thunderstorm',
        231: 'thunderstorm',
        232: 'thunderstorm',
        300: 'rain',
        301: 'rain',
        302: 'rain',
        310: 'rain',
        311: 'rain',
        312: 'rain',
        313: 'rain',
        314: 'rain',
        321: 'rain',
        500: 'few_clouds',
        501: 'few_clouds',
        502: 'few_clouds',
        503: 'few_clouds',
        504: 'few_clouds',
        511: 'few_clouds',
        520: 'few_clouds',
        521: 'few_clouds',
        522: 'few_clouds',
        531: 'few_clouds',
        600: 'snow',
        601: 'snow',
        602: 'snow',
        611: 'snow',
        612: 'snow',
        613: 'snow',
        615: 'snow',
        616: 'snow',
        620: 'snow',
        621: 'snow',
        622: 'snow',
        701: 'atmosphere',
        711: 'atmosphere',
        721: 'atmosphere',
        731: 'atmosphere',
        741: 'atmosphere',
        751: 'atmosphere',
        761: 'atmosphere',
        762: 'atmosphere',
        771: 'atmosphere',
        781: 'atmosphere',
        800: 'clear',
        801: 'clouds',
        802: 'clouds',
        803: 'clouds',
        804: 'clouds',
    };

    constructor() { }

    ngOnInit(): void { }

}
