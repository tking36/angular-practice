import { AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { localStorageToken } from 'src/localstorage.token';
import { InitService } from './init.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: 'Hello World from inline temp',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'hotelinventoryapp';

  role = 'Admin'

  @ViewChild('name', {static: true}) name!: ElementRef

  ngOnInit(): void {
    this.name.nativeElement.innerText = 'Hilton'
    this.localStorage.setItem('name', 'Hilton Hotel')
  }

  constructor(@Inject(localStorageToken) private localStorage: Storage, private initService: InitService) {
    
  }
  
  // @ViewChild('user', {read:ViewContainerRef}) vcr!: ViewContainerRef

  // ngAfterViewInit(): void {
  //   const componentRef = this.vcr.createComponent(RoomsComponent)
  //   componentRef.instance.numberOfRooms = 50
  // }

}
