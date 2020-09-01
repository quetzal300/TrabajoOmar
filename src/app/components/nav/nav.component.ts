import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NavTopComponent } from '../../components/nav-top/nav-top.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  correo: string = 'lol';

  indicador: boolean;

  constructor(private servicio:AuthService ) {
    this.correo = localStorage.getItem('correo');
    var URLactual = window.location;
    let ruta:string = Object.values(URLactual.hash).join('')

    if (ruta === "#/PublicidadC"){
      this.indicador = false;
    }else{
      this.indicador = true;
    }


  }

  salida(){
    this.servicio.logout();
  }

  ngOnInit(): void {
  }

}
