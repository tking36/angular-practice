import { Inject, Injectable } from '@angular/core';
import { RoomList } from '../rooms';
import { APP_SERVICE_CONFIG } from 'src/AppConfig/appconfig.service';
import { AppConfig } from 'src/AppConfig/appconfig.interface';
// import {environment} from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  roomList: RoomList[] =    [ 
      {
        roomNumber:1,
      roomType: 'Deluxe Room',
      amenities: 'Wifi, Air Conditioning',
      price: 500,
      photos: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
      rating: 4.5,
      },
      {
        roomNumber: 2,
        roomType: 'Deluxe Room',
        amenities: 'Wifi, Air Conditioning, Sauna',
        price: 1000,
        photos: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        checkinTime: new Date('11-Nov-2021'),
        checkoutTime: new Date('12-Nov-2021'),
        rating: 3.25
        },
        {
          roomNumber: 3,
          roomType: 'Private Room',
          amenities: 'Wifi, Air Conditioning, Sauna',
          price: 1500,
          photos: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          checkinTime: new Date('11-Nov-2021'),
          checkoutTime: new Date('12-Nov-2021'),
          rating:4.9,
          },
  
  ]

  constructor(@Inject(APP_SERVICE_CONFIG) private config: AppConfig) {
    console.log('Room Service Initialized')
    
  }

  getRooms() {
    return this.roomList
  }
}
