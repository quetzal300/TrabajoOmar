import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Publicasiones } from '../models/Publicasiones';
import { NavTopComponent } from '../components/nav-top/nav-top.component';
import { map } from 'rxjs/operators';
import { from } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BaseDatosService {

  url ='https://ofice-9bade.firebaseio.com'
  constructor(private http:HttpClient) { }

  creaPublicidad(publicidad:Publicasiones){
    console.log('Conectado a firebase')
    return this.http.post(`${this.url}/Publicaciones.json`,publicidad).pipe(
      map((respusta:any) =>{
        publicidad.id = respusta.name;
        return publicidad;
      })
    );
  }

  creaPublicidadC(publicidad:Publicasiones){
    console.log('Conectado a firebase')
    return this.http.post(`${this.url}/Categorias.json`,publicidad).pipe(
      map((respusta:any) =>{
        publicidad.id = respusta.name;
        return publicidad;
      })
    );
  }

  actualizar(publicidad:Publicasiones,id:string){

    return this.http.put(`${this.url}/Publicaciones/${id}.json`,publicidad)
  }

  actualizarC(publicidad:Publicasiones,id:string){

    return this.http.put(`${this.url}/Categorias/${id}.json`,publicidad)
  }

  elimiar(id:string){
    return this.http.delete(`${this.url}/Publicaciones/${id}.json`)
  }
  elimiarC(id:string){
    return this.http.delete(`${this.url}/Categorias/${id}.json`)
  }

  getPublicasiones(){
    return this.http.get(`${this.url}/Publicaciones.json`).pipe(
      map(respuesta => this.crearArreglo(respuesta))
    );
  }

  getPublicasionesC(){
    return this.http.get(`${this.url}/Categorias.json`).pipe(
      map(respuesta => this.crearArreglo(respuesta))
    );
  }

  crearArreglo(obje:object){
    let ventas : Publicasiones [] =[];
    if (obje === null){
      return [];
    }

    Object.keys(obje).forEach(idPublic =>{
      const publica:Publicasiones = obje[idPublic];
      publica.id = idPublic;
      ventas.push(publica)
    });
    return ventas;
  }

  generaFacha(){
    var fecha:string;
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();
    fecha = `${mm}/${dd}/${yyyy}`;
    return fecha;
  }
}
