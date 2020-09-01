import { Component, OnInit } from '@angular/core';
import { BaseDatosService } from '../../services/base-datos.service'

@Component({
  selector: 'app-nav-top',
  templateUrl: './nav-top.component.html',
  styleUrls: ['./nav-top.component.css']
})
export class NavTopComponent implements OnInit {

  red : boolean =true;

  AoI:boolean = true;

  constructor(private llamar: BaseDatosService) { }

  ngOnInit(): void {
  }

  Activas(){

  }
  Inactivas(){

  }
}
