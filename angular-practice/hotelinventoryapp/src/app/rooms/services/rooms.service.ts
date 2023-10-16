import { Inject, Injectable } from '@angular/core';
import { RoomList } from '../rooms';
import { APP_SERVICE_CONFIG } from 'src/AppConfig/appconfig.service';
import { AppConfig } from 'src/AppConfig/appconfig.interface';
import { HttpClient } from '@angular/common/http';
// import {environment} from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  roomList: RoomList[] = []

  constructor(@Inject(APP_SERVICE_CONFIG) private config: AppConfig, private http: HttpClient) {
    console.log('Room Service Initialized')
  }

  getRooms() {
    return this.http.get<RoomList[]>('/api/rooms')
  }
}
