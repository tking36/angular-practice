import { AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit, QueryList, SkipSelf, ViewChild, ViewChildren } from '@angular/core';
import { Room, RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';
import { Observable, Subscription, catchError, of, Subject, map } from 'rxjs';
import { HttpEventType } from '@angular/common/http';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit, AfterViewInit, AfterViewChecked {

  hotelName = "Hilton"
  numberOfRooms = 10
  hideRooms= true
  selectedRoom! : RoomList

  rooms : Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  }

  title: string = 'Room List'


roomList: RoomList[] = []

// stream = new Observable(observer => {
//   observer.next('user1')
//   observer.next('user2')
//   observer.next('user3')
//   observer.complete()
//   observer.error('error')
// })

  @ViewChild(HeaderComponent) headerComponent?: HeaderComponent

  @ViewChildren(HeaderComponent) headerChildrenComponent!: QueryList<HeaderComponent>;

  // roomService = new RoomsService();

  totalBytes = 0

  subscription! : Subscription

  error$ = new Subject<string>();

  getError$ = this.error$.asObservable();

  rooms$ = this.roomsService.getRooms$.pipe(catchError((err) => {
    console.log(err)
    this.error$.next(err.message)
    return of([])
  }))

  roomsCount$ = this.roomsService.getRooms$.pipe(
    map((rooms) => rooms.length)
  )

  constructor(@SkipSelf() private roomsService: RoomsService,
  private configService: ConfigService) {}

  ngOnInit(): void {

    this.roomsService.getPhotos().subscribe((event) => {
      switch (event.type) {
        case HttpEventType.Sent: {
          console.log('Request has been made')
          break
        }
        case HttpEventType.ResponseHeader: {
          console.log('Request success')
          break
        }
        case HttpEventType.DownloadProgress: {
          this.totalBytes+= event.loaded
          break
        }
        case HttpEventType.Response: {
          console.log(event.body)
          break
        }
      }
    })

    // this.stream.subscribe((data) => console.log(data))
    // this.roomsService.getRooms$.subscribe(rooms => {
    //   this.roomList = rooms
    // })
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
    // this.roomList = [...this.roomList, room]

    this.roomsService.addRoom(room).subscribe((data) => {
      this.roomList = data
    })
  }

  editRoom() {
    const room: RoomList = {
      roomNumber: "3",
      roomType: 'Super Room',
      amenities: 'Wifi',
      price: 996,
      photos: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
      rating:4.6,
    }
    this.roomsService.editRoom(room).subscribe((data) => {
      this.roomList = data
    })
  }

  deleteRoom() {
    this.roomsService.deleteRoom('3').subscribe((data) => {
      this.roomList = data
    })
  }

  ngOnDestroy() {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
