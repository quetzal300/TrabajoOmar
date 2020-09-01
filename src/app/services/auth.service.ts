import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { UsuaruiModel }from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=';
  private API_KEY = 'AIzaSyDgwPRwwJxFNxY0V_arTanj1JGiS2aUlBk';
  private urlRec = 'https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=';

  userToken:string;

  //https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]
  //iniciar secion

  //https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=[API_KEY]
  //recupera contraseña


  constructor(private http:HttpClient) {
    this.leerToken();
  }

  recuperaPss(usuario: UsuaruiModel){
    let Datos ={
      requestType:'PASSWORD_RESET',
      email:usuario.email
    };
    return this.http.post(
      `${this.urlRec}${this.API_KEY}`,
      Datos
    )
  }

  logout(){
    console.log(localStorage.getItem('token'));
    console.log(localStorage.getItem('correo'));
    localStorage.clear();
    this.userToken = '';
  }

  login(usuario: UsuaruiModel){
    const Datos = {
      email:usuario.email,
      password:usuario.password,
      returnSecureToken: true
    };
    localStorage.setItem('correo', Datos.email);
    //hacemos una peticion http post a firebase
    return this.http.post(
      `${this.url}${this.API_KEY}`,
      Datos
    )
  }

  guardarToken(idToken:string){
    this.userToken = idToken;
    //guardamos token
    localStorage.setItem('token',idToken);

  }

  leerToken (){
    if(localStorage.getItem('token')){
      this.userToken = localStorage.getItem('token');
      console.log('token leido ');
    }else{
      this.userToken = "";
    }
    return this.userToken;
  }

  estaAutentificado(): boolean{
    if (this.userToken.length > 2){
      console.log(this.userToken)
      return true;
    }else{
       return false;
     }
  }

}
