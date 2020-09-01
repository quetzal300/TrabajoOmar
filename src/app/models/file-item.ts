export class FileItem{
  public archivo: File;
  public nombre: string;
  public url: string;
  public estasubiendo:boolean;
  public progreso: number;

  constructor (imagen : File){
    this.archivo = imagen;
    this.nombre = imagen.name;
    this.estasubiendo = false;
    this.progreso = 0;
  }

}
