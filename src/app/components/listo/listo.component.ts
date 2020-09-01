import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listo',
  templateUrl: './listo.component.html',
  styleUrls: ['./listo.component.css']
})
export class ListoComponent implements OnInit {

  constructor(private rauter:Router) { }

  ngOnInit(): void {
  }
  regresa(){
    this.rauter.navigateByUrl('/IniciaSesion');
  }

}
