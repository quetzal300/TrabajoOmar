import { database } from 'firebase';
import { Data } from '@angular/router';

export class Publicasiones{
  url: string;
  Nombre: string;
  Duracion: string;
  Creado: string;
  Usuario: string;
  Sesion: number;
  Activo: boolean;
  id:string;
  Categoria: string;
  FechaFin: Data;
  constructor(){
    this.Activo = true;
  }

}
