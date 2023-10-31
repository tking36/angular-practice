import { Injectable} from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable, of } from "rxjs";
import { LoginService } from "src/app/login/login.service";

@Injectable({
  providedIn: 'root'
})


@Injectable({
  providedIn: 'root'
})
export class RoomGuard implements CanActivateChild {

  constructor (private loginService: LoginService) {}

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return of(this.loginService.isAdmin);
  }
}