import { Component, OnInit, Input } from '@angular/core';
import { UsuaruiModel }from '../../models/usuario.model';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { config, from } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-secion1',
  templateUrl: './secion1.component.html',
  styleUrls: ['./secion1.component.css']
})

//cuando el token es correcto vamos a publicasiones
export class Secion1Component implements OnInit {

  mostrar = false;

  mostrarCoreo:boolean = false;

  mostrarCoreoup(){
    let entrada = ((document.getElementById('entradaCorreo')as HTMLInputElement).value);
    // console.log(entrada)
    if(entrada){
      return  this.mostrarCoreo = true;
    }else{
      return this.mostrarCoreo = false;
    }

  }
  mostrarContrasena:boolean = false;

  mostrarContrasenaup(){
    let entrada = ((document.getElementById('entradaContra')as HTMLInputElement).value);
    // console.log(entrada);
    if(entrada){
      return  this.mostrarContrasena = true;
    }else{
      return this.mostrarContrasena = false;
    }

  }

  Ver:boolean = false;

  mostrarPass(){
    this.Ver = !this.Ver;
    let password1:any = document.getElementById('entradaContra');
    if(this.Ver){
      password1.type = "current-password";
    }else{
       password1.type = "password";
    }
    // console.log(password1.type)
    return(password1.type);
  }

  OjoClass:boolean = true

  cambiaOjo(){
    this.OjoClass = !this.OjoClass;
  }

  Acceder:boolean = true

  redAcceder(){
    let correo:any = document.getElementById('entradaCorreo');
    let password:any = document.getElementById('entradaContra');
    if (correo.value && password.value ){
      // console.log("llenos");
      this.Acceder = false;
    }else{
      // console.log("No llenos");
      this.Acceder = true;
    }
    return true;
  }

  usuario: UsuaruiModel;

  constructor(private auth:AuthService,
              private rauter:Router) { }

  ngOnInit(): void {
    this.usuario = new UsuaruiModel();
    this.usuario.email = 'admin@office-depot.com';
    this.usuario.password = '123';
  }

  Enviartoken(from: NgForm){
    if (from.invalid){
      return;
    }
    console.log(this.usuario);
    console.log(from);
    this.auth.login(this.usuario).subscribe(respuesta => {
      console.log("El token es ");
      this.auth.guardarToken(respuesta['idToken']);
      console.log(respuesta['idToken']);
      //funcion de Router que nos permita llevarnos a una ruta
      this.rauter.navigateByUrl('/Publicidad');
    },(err)=>{
      console.log("manejo de error ");
      console.log(err.error.error.message);
    })
  }
}
