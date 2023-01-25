import { ComponentRef, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

//crear una inferfaz para canDeactivate
interface Desacticar{
  SalirDeRuta: () => Observable<boolean> | boolean;
}

@Injectable({
  providedIn: 'root'
})

export class CandesactivateGuard implements CanDeactivate<Desacticar> {
  canDeactivate(component: Desacticar) {
    return component.SalirDeRuta ? component.SalirDeRuta(): true;
   
  }
  
}
