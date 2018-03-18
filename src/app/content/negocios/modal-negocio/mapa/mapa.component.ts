import { Input } from '@angular/core';
import { Negocio } from './../../../../clases/negocio';
import { log } from 'util';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { AgmMap } from '@agm/core';

@Component({
  selector: 'app-ms-mapa-negocio',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements OnInit,  AfterViewInit {

  title = 'My first AGM project';
  lat = 22.7633237;
  lng = -102.5966308;
  @ViewChild('agmMap') agmMap;

  @Input('item') item: Negocio;
  @Input('isNew') isNew: boolean;

  constructor() {
  }

  ngOnInit() {
    // this.lat = Number(this.item.latitud)
    // this.lng = Number(this.item.longitud)
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
    console.log(this.agmMap);
    this.agmMap.triggerResize();
  }

}
