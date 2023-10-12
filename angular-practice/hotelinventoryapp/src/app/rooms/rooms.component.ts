import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  hotelName = "Hilton"
  numberOfRooms = 10
  hideRooms= false
  selectedRoom! : RoomList

  rooms : Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  }

  title: string = 'Room List'


roomList: RoomList[] = []

  constructor() {}

  ngOnInit(): void {
    this.roomList =    [ 
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
  }

  toggle() {
    this.hideRooms = !this.hideRooms
    this.title = "Rooms List"
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room
  }

  addRoom() {
    const room: RoomList = {
      roomNumber: 4,
      roomType: 'Deluxe Room',
      amenities: 'Wifi',
      price: 456,
      photos: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
      rating:4.6,
    }
    // this.roomList.push(room)
    this.roomList = [...this.roomList, room]
  }
}
