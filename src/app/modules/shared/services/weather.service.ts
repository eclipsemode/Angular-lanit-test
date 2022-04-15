import { Injectable } from '@angular/core';
// import { Headers, Http, Response } from '@angular/http';
import { Observable, of } from 'rxjs';

import { Weather } from '@shared/models';

@Injectable()
export class WeatherService {

    constructor() { }

    getWeather(city: string): Observable<Weather> {
        // return this.http.get('/_api/web/lists/getbytitle(\'Weather\')/items?$filter=(Title%20eq%20\'' + encodeURIComponent(city) + '\')')
        //     .map((response: Response) => response.json().value)
        //     .map(x => {
        //         return new Weather(Math.round(x[0].Temperature) , x[0].CloudType);
        //     });
        return of(new Weather(Math.round(-5), 200));
        // return of({ city, weather: new Weather(Math.round(-5), 300) });
        // return of({ city, weather: new Weather(Math.round(-5), 500) });
        // return of({ city, weather: new Weather(Math.round(-5), 600) });
        // return of({ city, weather: new Weather(Math.round(-5), 731) });
        // return of({ city, weather: new Weather(Math.round(-5), 802) });
    }

}
