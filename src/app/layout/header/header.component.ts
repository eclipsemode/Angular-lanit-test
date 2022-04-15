import { Component, OnInit } from '@angular/core';
import {CitiesEnum, Weather} from '@shared/models';
import { WeatherService } from '@shared/services';
import { catchError, map } from 'rxjs/operators';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

    cities = Object.entries(CitiesEnum).map(([key, value]) => ({ key, value }));
    citiesEnum = CitiesEnum;

    weather: { [city: string]: Weather } = {};

    constructor(private weatherService: WeatherService) {}

    ngOnInit(): void {
        this.cities.forEach(city => this.loadWeatherByCity(city.key));
    }

    private loadWeatherByCity(city: string): void {
        this.weatherService.getWeather(city).pipe(
            map(data => {
                this.weather[city] = data;
            }),
            catchError(error => {
                console.error(error);
                return [];
            })
        ).subscribe();
    }

}
