import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  enviado=false;
  menj: boolean | undefined;
  
  //para el formulario
    constructor(private formBuilder: FormBuilder) { }

  registroForm = this.formBuilder.group({
      firstname:['', Validators.required],
      lastname:['', Validators.required],
      username:['', Validators.required],
      password:['', Validators.required]
  })

  get firstname(){return this.registroForm.get('firstname')}
  get lastname(){return this.registroForm.get('lastname')}
  get username(){return this.registroForm.get('username')}
  get password(){return this.registroForm.get('password')}


  datos = new Array();

  
  Enviar(){
    this.datos.push({
    'FirstName' : this.registroForm.get('firstname')?.value,
    'LastName' : this.registroForm.get('lastname')?.value,
    'Username' : this.registroForm.get('username')?.value,
    'Password' : this.registroForm.get('password')?.value,
    })
    alert('Registro: Fue exitoso!!  ' +
    `Nombre: ${this.firstname?.value} \n Apellido: ${this.lastname?.value} \n Usuario: ${this.username?.value} \n Password: ${this.password?.value}`);
    this.enviado=true;
    console.log(this.datos);
    this.menj = true
  }

  nombre=this.firstname?.value;
  apellido=this.lastname?.value;
  usuario=this.username?.value;
  contraseña=this.password?.value;


  Refrescar(){
    location.reload();
  }
  

  SalirDeRuta(): Observable<boolean> | boolean{
    
    if(!this.nombre==undefined && !this.apellido==undefined && !this.usuario==undefined && !this.contraseña==undefined || this.enviado ){
      return true;
    }

      let confirmar = confirm("¿Desea abandonar el registro? \n Perderá todos los datos!!");
      return confirmar;
    }
   

}