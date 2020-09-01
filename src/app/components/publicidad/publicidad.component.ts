import { Component, OnInit } from '@angular/core';
import { BaseDatosService } from '../../services/base-datos.service'
import { from } from 'rxjs';
import { Publicasiones } from '../../models/Publicasiones'
import { InicioImagenComponent } from '../inicio-imagen/inicio-imagen.component';

@Component({
  selector: 'app-publicidad',
  templateUrl: './publicidad.component.html',
  styleUrls: ['./publicidad.component.css']
})
export class PublicidadComponent implements OnInit {

  Publi = new Publicasiones();

  AoI:boolean = true;

  red : boolean =false;

  Lista :Publicasiones[]=[];

  direccion: string = '../../../assets/Captura de pantalla de 2020-06-30 22-42-06.png';
  constructor( private llamar: BaseDatosService) {
   }

  ngOnInit(): void {
    this.llamar.getPublicasiones().subscribe(respuesta =>{
      this.Lista = respuesta;
      console.log(this.Lista)
      const hoy = this.llamar.generaFacha().split("/");
      console.log(hoy)
      let lugar =0;
      for(let i of this.Lista){
        let FechaAux = i.FechaFin.split("T")[0];
        FechaAux =FechaAux.split("-")
        console.log(FechaAux);

        if(parseInt(hoy[2])  > parseInt(FechaAux[0]) ){
          i.Activo = false;
        }if(parseInt(hoy[2]) === parseInt(FechaAux[0]) && parseInt(hoy[0]) > parseInt(FechaAux[1])){
          i.Activo = false;
        }if(parseInt(hoy[2]) === parseInt(FechaAux[0]) && parseInt(hoy[0]) === parseInt(FechaAux[1]) && parseInt(hoy[1]) >= parseInt(FechaAux[2])){
          i.Activo = false;
        }else{
          i.Activo = true;
        }
        this.Lista[lugar].Activo = i.Activo;
        console.log(this.Lista[lugar].Activo)
        lugar++;
      }
      lugar = 0;
    });
  }

  Activas(){
    this.AoI = true;
  }
  Inactivas(){
    this.AoI = false;
  }
  enviaID(Publi){
    localStorage.setItem('url',Publi.url);
    localStorage.setItem('Nombre',Publi.Nombre);
    localStorage.setItem('Duracion',Publi.Duracion);
    localStorage.setItem('Creado',Publi.Creado);
    localStorage.setItem('Sesion',Publi.Sesion);
    localStorage.setItem('id',Publi.id);
    localStorage.setItem('Categoria',Publi.Categoria);
  }



  Eliimnar(id){
    console.log(id);
    this.llamar.elimiar(id).subscribe(
      res =>{
      console.log(res)
    }
    );
  }

}
