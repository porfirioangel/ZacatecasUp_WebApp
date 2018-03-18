import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ms-datos-negocio',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.scss']
})
export class DatosComponent implements OnInit {

  tags = [];


  title = 'My first AGM project';
  lat = 22.7633237;
  lng = -102.5966308;

  constructor() { }

  ngOnInit() {
  }

}
