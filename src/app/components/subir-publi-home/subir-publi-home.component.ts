import { Component, OnInit } from '@angular/core';
import { FileItem } from '../../models/file-item';
import { CargaImagenesService } from '../../services/carga-imagenes.service';
import { Publicasiones } from '../../models/Publicasiones';
import { UsuaruiModel } from 'src/app/models/usuario.model';
import { BaseDatosService } from '../../services/base-datos.service';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';




@Component({
  selector: 'app-subir-publi-home',
  templateUrl: './subir-publi-home.component.html',
  styleUrls: ['./subir-publi-home.component.css']
})
export class SubirPubliHomeComponent implements OnInit {

  Publisidad = new Publicasiones();

  archivo: FileItem[]=[];

  estaSObreDrop: boolean = false;

  constructor( public cargaImg:CargaImagenesService, private publicidad:BaseDatosService) {

  }


  ngOnInit(): void {
  }

  sobreCueadro(event){
    console.log(event);
  }

  cargaImagen(archivo:FileItem[],Publisidad){
    return this.cargaImg.cargarImagenAFirebe(archivo,Publisidad);
  }

  limpiar(){
    this.archivo = [];
    console.log(this.archivo);
  }

  selecionaImg(event){
    console.log(event.target.files[0]);
    let archivoTemporal = event.target.files[0];
    let nuevoArchivo = new FileItem( archivoTemporal );
    this.archivo.push(nuevoArchivo);

  }

  guardar(formu: NgForm,archivo:FileItem[]){
    const F = this.compruevaFecha();
    if(formu.invalid){
      console.log('fata llenar ')
      return;
    }if(F){
      this.cargaImagen(archivo,this.Publisidad);
      console.log('Formulario echo ')
      console.log(this.Publisidad);
    }
  }

  compruevaFecha(){

    let FechaF = this.Publisidad.Duracion.split(" ");
    console.log(FechaF);
    let diaI = parseInt(FechaF[1]);
    let diaF = parseInt(FechaF[5]);
    let  MES = [1,'Ene',2,'Feb',3,'Mar',4,'Abr',5,'May',6,'Jun',7,'Jul',8,'Ago',9,'Sept',10,'Oct',11,'Nov',12,'Dic'];
    let mesInt = 23;
    let mesboolI = false;
    let mesboolF = false;
    let mmI = FechaF[2];
    let mmF = FechaF[6];
    let anoI = parseInt(FechaF[3]);
    let anoF = parseInt(FechaF[7]);

    let indiceMI;
    let indiceMF;

    if(!diaF && !diaI){
      alert('a el formato deve ser Del 05 Ene 20 al 06 Feb 20');
      return false;
    }if(diaF > 31 || diaI> 31){
      alert('Ese dia no existe');
      return false;
    }if(!anoI && !anoF){
      alert( ' bel formato deve ser Del 05 Ene 20 al 06 Feb 20');
      return false;
    }if(anoI > anoF){
      alert ('el año no puede ser anterior al actual');
      return false;
    }
    while(mesInt  != 0){
      if ( mmI == MES[mesInt]){
        console.log('mesI corecto');
        mesboolI = true;
        indiceMI = MES[mesInt-1];
      }
      console.log(mmI + ' ' + MES[mesInt])
      if ( mmF == MES[mesInt]){
        console.log('mesF corecto');
        mesboolF = true;
        indiceMF = MES[mesInt-1];
      }
      mesInt = mesInt-1;
    }
    if(indiceMI > indiceMF){
      alert ('el mes no puede ser anterior al actual');
      return false;
    }
    mesInt = 23;

    if(mesboolF && mesboolI ){
      console.log(`${diaI}/${mmI}/${anoI}`);
      console.log(`${diaF}/${mmF}/${anoF}`);

    }else{
      alert('c el formato deve ser Del 05 Ene 20 al 06 Feb 20');
      return false;
    }
    mesboolI = false;
    mesboolF = false;

    let FechaI = `${diaI}/${mmI}/${anoI}`;
    let FechaT = `${diaF}/${mmF}/${anoF}`;


    const Fecha1 = new Date(anoI+2000,indiceMI-1,diaI);
    const Fecha2 = new Date(anoF+2000,indiceMF-1,diaF);
     console.log( Fecha1);
     console.log( Fecha2);
     console.log(indiceMI)
     console.log(indiceMF)

    if(!Fecha1){
      alert('las fechas no son correctas')
    }
    if(!Fecha2){
      alert('las fechas no son corectas')
    }

    let FechaHoy = this.publicidad.generaFacha().split("/");
    let mmH:number = parseInt(FechaHoy[0]);
    let ddH:number = parseInt(FechaHoy[1]);
    let aaaaH:number = parseInt(FechaHoy[2]);
    console.log(`${ddH}/${mmH}/${aaaaH}`)

     if(anoI+2000 < aaaaH){
       alert ('el año no puede ser anterior al actual');
       return false;
     }if(indiceMI < mmH && diaI < ddH && anoI+2000 < aaaaH){
       console.log('la fecha tiene que ser mayor a la de hoy');
       return false;
     }else{
       console.log('fecha corecta')
       this.Publisidad.FechaFin = Fecha2;
       return true;
     }
   // Del 05 Ene 20 al 06 Feb 20
  }

}
