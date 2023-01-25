import { Component } from '@angular/core';
import { AutenticacionService } from 'src/app/services/autenticacion.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

   
  constructor(public autenticacion: AutenticacionService){}

  usuariologueado = false;
  
  ngOnInit(){

    this.usuariologueado = this.autenticacion.isLoggedIn('');
    this.autenticacion.changeLoginStatus$.subscribe(
      (estado: boolean) => this.usuariologueado = estado
      );
    }
  
    logout(){
      this.autenticacion.logout();
  }

}
