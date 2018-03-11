import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ms-mapa-negocio',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements OnInit {

  title: string = 'My first AGM project';
  lat: number = 22.7633237;
  lng: number = -102.5966308;

  constructor() { }

  ngOnInit() {
  }

}
