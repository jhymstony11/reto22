import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/services/autenticacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 

  usuario = '';
  contra = '';

  errorMensaje = '';
  usuarioError = '';
  contraError = '';

  validar = {
    usuario: 'stony',
    contra: '12345',
  };

  constructor(private autenticacion: AutenticacionService, private router: Router){}

      redireccion = '';

      login(){

        if (this.usuario === this.validar.usuario && this.contra === this.validar.contra) {
          this.autenticacion.login();
          this.redireccion = this.autenticacion.urlUsuarioIntentaAcceder;
          this.router.navigate([this.redireccion]);
        } else {
          this.errorMensaje = 'Ingrese los datos correctamente ❌';
          if (this.usuario === '') {
            this.usuarioError = 'El espacio usuario debe ser llenado';
          }
          if (this.contra === '') {
            this.contraError = 'La contraseña debe ser llenada';
          }
        }
      }
}
