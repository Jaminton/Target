import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from "@Angular/fire/auth";
import { map } from "rxjs/operators";
import { isNullOrUndefined } from 'util';



@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private AFauth: AngularFireAuth) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

   return this.AFauth.authState.pipe(map( auth => {
      console.log(auth);
      return false;

    }))

    

  }
}
