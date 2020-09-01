import { Component, OnInit } from '@angular/core';
import { UsuaruiModel }from '../../models/usuario.model';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-res',
  templateUrl: './res.component.html',
  styleUrls: ['./res.component.css']
})
export class ResComponent implements OnInit {

  mostrarCoreo:boolean = false;

  mostrarCoreoup(){
    let entrada = ((document.getElementById('Correo')as HTMLInputElement).value);
    // console.log(entrada)
    if(entrada){
      return  this.mostrarCoreo = true;
    }else{
      return this.mostrarCoreo = false;
    }

  }

  Acceder:boolean = false;

  redAccederr(){
    let correo:any = document.getElementById('Correo');
    if (correo.value){
       console.log("llenos");
      this.Acceder = false;
    }else{
       console.log("No llenos");
      this.Acceder = true;
    }
  }

  usuario: UsuaruiModel;

  constructor(private auth:AuthService,
              private rauter:Router) { }

  ngOnInit(): void {
    this.usuario = new UsuaruiModel();
    this.usuario.email = 'admin@office-depot.com';
  }

  mensajeCorreo:boolean = true;

  Enviar(from: NgForm){
    if (from.invalid){
      return this.mensajeCorreo =false;
    }
    console.log(this.usuario);
    console.log(from)
    this.auth.recuperaPss(this.usuario).subscribe(espuesta => {
      console.log('correo enviado');
      console.log(espuesta);
      this.rauter.navigateByUrl('/Listo');
      return this.mensajeCorreo =true;
    },err=>{
      console.log('correo invalido');
      console.log(err.error.error.message);
      return this.mensajeCorreo =false;
    }

    )
  }
}
