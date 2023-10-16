import { AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit, QueryList, SkipSelf, ViewChild, ViewChildren } from '@angular/core';
import { Room, RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit, AfterViewInit, AfterViewChecked {

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

  @ViewChild(HeaderComponent) headerComponent?: HeaderComponent

  @ViewChildren(HeaderComponent) headerChildrenComponent!: QueryList<HeaderComponent>;

  // roomService = new RoomsService();

  constructor(@SkipSelf() private roomsService: RoomsService) {}

  ngOnInit(): void {
    this.roomsService.getRooms().subscribe(rooms => {
      this.roomList = rooms
    })
  }

  ngAfterViewInit() {
    
      this.headerComponent!.title = "Rooms View";
    

    this.headerChildrenComponent.last.title = 'Last Title'
  }

  ngAfterViewChecked(): void {
    
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
      roomNumber: "4",
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
