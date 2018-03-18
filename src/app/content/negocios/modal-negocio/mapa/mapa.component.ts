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

  constructor() {
  }

  ngOnInit() {
    console.log('ngOnInit');
    this.agmMap.triggerResize();
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
    console.log(this.agmMap);
    this.agmMap.triggerResize();
  }

}
