import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RoomTypeModel} from "../models/RoomType.model";
import {Observable, of} from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { roomDataForm } from '../models/Intarface.model';

@Injectable()
export class HttpService{

    errorMessage: String = "";
    constructor(private http: HttpClient){ }

    getRoom() : Observable<RoomTypeModel[]> {
        return this.http.get("assets/data/room.json").pipe(map((data:any)=>{
            let roomList = data["roomList"];
            return roomList.map(function(room: any): RoomTypeModel {
                return new RoomTypeModel(room.id, room.name);
            });
        }),
            catchError(err => {
                console.log(err);
                this.errorMessage = err.message;
                return [];
            }))
    }

    getDataForm(data: roomDataForm) {
        return of({});
    }
}
