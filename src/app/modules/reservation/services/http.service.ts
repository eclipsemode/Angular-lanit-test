import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RoomType} from "../models/RoomType";
import {Observable} from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class HttpService{

    errorMessage: String = "";
    constructor(private http: HttpClient){ }

    getRoom() : Observable<RoomType[]> {
        return this.http.get("assets/data/room.json").pipe(map((data:any)=>{
            let roomList = data["roomList"];
            return roomList.map(function(room: any): RoomType {
                return new RoomType(room.id, room.name);
            });
        }),
            catchError(err => {
                console.log(err);
                this.errorMessage = err.message;
                return [];
            }))
    }
}
