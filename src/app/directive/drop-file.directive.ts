import { Directive, EventEmitter, ElementRef, HostListener, Input,Output } from '@angular/core';
import { FileItem } from '../models/file-item';


@Directive({
  selector: '[appDropFile]'
})
export class DropFileDirective {

  constructor() { }

  @Input() archivos: FileItem[]=[];

  @Output() mouseSobre: EventEmitter<boolean> = new EventEmitter();


  @HostListener('dragover', ['$event']) public fotoDentro(event:any){
    this.mouseSobre.emit (true);
    this.prevenir(event);
  }

  @HostListener('dragleave', ['$event']) public fotoFuera  (event:any){
     this.mouseSobre.emit (false);
  }

  @HostListener('drop', ['$event']) public solteFoto  (event:any){
    const trasferencia = this.getTrasferencia(event);
    if(!trasferencia){
      return;
    }
      this.extraerArchivos(trasferencia.files);
      this.prevenir(event)
      this.mouseSobre.emit (false);
 }

  private extraerArchivos( archivosLista: FileList){
      const archivoTemporal = archivosLista[0];
      const nuevoArchivo = new FileItem( archivoTemporal );
      if(archivosLista.length>=2){
        alert('solo se puede subir una foto');
        return;
      }
      if(this.archivoPuedeCargar(archivosLista[0])){
        console.log('evento soltar imagen')
        console.log(archivosLista);
        this.archivos.push(nuevoArchivo);
        return true;
      }
  }


  private getTrasferencia( event:any ){
    return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer;
  }

   //validacion
   private prevenir(event){
     event.preventDefault();
     event.stopPropagation();
   }

   private esImaguen( tipo: string):boolean{
     console.log('esUnaImagenF')
     console.log(tipo)
     if(tipo === ''||tipo === undefined){
      return false;
     }if(tipo.startsWith('image')){
      return true;
     }
     return false;
   }

   peso:number;

   private tamano(archivo:File){
    this.peso = archivo.size;
    return this.peso;
   }

   private archivoPuedeCargar(archivo:File):boolean{
    if (this.esImaguen(archivo.type) && this.tamano(archivo)<1000000){
      console.log('archivo correcot');
      return true;
    }if(this.tamano(archivo)>1000000){
      alert('la imagen deve pesar maximo un mega')
      return false;
    }
    else{
      alert('Formato Equivocado')
      console.log('archivo no es imagen');
      return false;
    }
   }
}
