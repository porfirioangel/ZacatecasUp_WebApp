import { FormGroup } from '@angular/forms';
import { Input } from '@angular/core';
import { Negocio } from './../../../../clases/negocio';
import { log } from 'util';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ms-mapa-negocio',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements OnInit {


  @Input('item') item: Negocio;
  @Input('isNew') isNew: boolean;
  @Input('form') form: FormGroup;


  constructor() {
  }

  ngOnInit() {
  }

}
