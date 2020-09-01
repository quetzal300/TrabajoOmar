import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor( private auth:AuthService,
               private router:Router){
  }

  canActivate():boolean{
    if(this.auth.estaAutentificado()){
      console.log('Sesion Inisiada');
      return true;
    }else{
      this.router.navigateByUrl('IniciaSesion')
      console.log('Inicia secion Por favor')
     }

  }

}
