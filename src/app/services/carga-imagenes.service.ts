import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { BaseDatosService } from '../services/base-datos.service';
import { FileItem } from '../models/file-item';
import  *as firebase from 'firebase';


 @Injectable({
  providedIn: 'root'
 })
export class CargaImagenesService {

  private CARPETA_IMAGENES = 'img';

  constructor( private db:AngularFirestore , private publicidad:BaseDatosService) {

  }


  cargarImagenAFirebe(img:FileItem[],Publisidad){
    const storageRef = firebase.storage().ref();

    img[0].estasubiendo = true;

    const uploadTask: firebase.storage.UploadTask = storageRef.child(`${ this.CARPETA_IMAGENES }/${ img[0].nombre }`).put( img[0].archivo );

        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,(snapshot: firebase.storage.UploadTaskSnapshot ) =>{
        img[0].progreso = ( snapshot.bytesTransferred / snapshot.totalBytes ) * 100
          console.log(img[0].progreso)
      },
      (error)=> console.error('Algo salio mal en la carga',error),
      ()=>
      {
        if(img[0].progreso >= 100){
          uploadTask.snapshot.ref.getDownloadURL().then(downloadURL=> {

            Publisidad.Creado = this.publicidad.generaFacha()

            let url:string = downloadURL;
            console.log('Direcion de imagn')
            console.log(url)
            Publisidad.url = url;
            Publisidad.Usuario= 'Alfonso'

            console.log(Publisidad)
             this.publicidad.creaPublicidad(Publisidad).subscribe(
                  respuesta => {
                  console.log('Enviado')
             })
            return img[0].progreso;
           });
        }
    })
  }

  cargarImagenAFirebeC(img:FileItem[],Publisidad){
    const storageRef = firebase.storage().ref();

    img[0].estasubiendo = true;

    const uploadTask: firebase.storage.UploadTask = storageRef.child(`${ this.CARPETA_IMAGENES }/${ img[0].nombre }`).put( img[0].archivo );

        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,(snapshot: firebase.storage.UploadTaskSnapshot ) =>{
        img[0].progreso = ( snapshot.bytesTransferred / snapshot.totalBytes ) * 100
          console.log(img[0].progreso)
      },
      (error)=> console.error('Algo salio mal en la carga',error),
      ()=>
      {
        if(img[0].progreso >= 100){
          uploadTask.snapshot.ref.getDownloadURL().then(downloadURL=> {

            Publisidad.Creado = this.publicidad.generaFacha()

            let url:string = downloadURL;
            console.log('Direcion de imagn')
            console.log(url)
            Publisidad.url = url;
            Publisidad.Usuario= 'Alfonso'

            console.log(Publisidad)
             this.publicidad.creaPublicidadC(Publisidad).subscribe(
                  respuesta => {
                  console.log('Enviado')
             })
            return img[0].progreso;
           });
        }
    })
  }

  ActualizaImagenAFirebe(img:FileItem[],Publisidad,id){
    const storageRef = firebase.storage().ref();

    img[0].estasubiendo = true;
    const uploadTask: firebase.storage.UploadTask = storageRef.child(`${ this.CARPETA_IMAGENES }/${ img[0].nombre }`).put( img[0].archivo );

        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,(snapshot: firebase.storage.UploadTaskSnapshot ) =>{
        img[0].progreso = ( snapshot.bytesTransferred / snapshot.totalBytes ) * 100
          console.log(img[0].progreso)
      },
      (error)=> {
        console.error('Algo salio mal en la carga',error);
      },
      ()=>
      {
        if(img[0].progreso >= 100){
          uploadTask.snapshot.ref.getDownloadURL().then(downloadURL=> {
            let url:string = downloadURL;
            console.log('Direcion de imagn')
            console.log(url)
            Publisidad.url = url;
            Publisidad.Usuario= 'Alfonso'

            console.log(Publisidad)

             this.publicidad.actualizar(Publisidad,id).subscribe(respuesta =>{
              console.log(respuesta)
              });
            return img[0].progreso;
           });
        }
    })
  }

  ActualizaImagenAFirebeC(img:FileItem[],Publisidad,id){
    const storageRef = firebase.storage().ref();

    img[0].estasubiendo = true;
    const uploadTask: firebase.storage.UploadTask = storageRef.child(`${ this.CARPETA_IMAGENES }/${ img[0].nombre }`).put( img[0].archivo );

        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,(snapshot: firebase.storage.UploadTaskSnapshot ) =>{
        img[0].progreso = ( snapshot.bytesTransferred / snapshot.totalBytes ) * 100
          console.log(img[0].progreso)
      },
      (error)=> {
        console.error('Algo salio mal en la carga',error);
      },
      ()=>
      {
        if(img[0].progreso >= 100){
          uploadTask.snapshot.ref.getDownloadURL().then(downloadURL=> {
            let url:string = downloadURL;
            console.log('Direcion de imagn')
            console.log(url)
            Publisidad.url = url;
            Publisidad.Usuario= 'Alfonso'

            console.log(Publisidad)

             this.publicidad.actualizarC(Publisidad,id).subscribe(respuesta =>{
              console.log(respuesta)
              });
            return img[0].progreso;
           });
        }
    })
  }
}
