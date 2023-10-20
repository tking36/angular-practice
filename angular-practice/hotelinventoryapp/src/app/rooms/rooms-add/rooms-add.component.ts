import { Component, OnInit } from '@angular/core';
import { RoomList } from '../rooms';
import { RoomsService } from '../services/rooms.service';

@Component({
  selector: 'app-rooms-add',
  templateUrl: './rooms-add.component.html',
  styleUrls: ['./rooms-add.component.scss']
})
export class RoomsAddComponent {

  room: RoomList = {
    roomType: '',
    amenities: '',
    checkinTime: new Date(),
    checkoutTime: new Date(),
    photos: '',
    price: 0,
    rating: 0,
  }

  successMessage: string = ''

  constructor (private roomsService: RoomsService) {}

  ngOnInit(): void {
  }
  
  AddRoom() {
    this.roomsService.addRoom(this.room).subscribe((data) => (this.successMessage = 'Room Added Successfully'))
  } 

}
