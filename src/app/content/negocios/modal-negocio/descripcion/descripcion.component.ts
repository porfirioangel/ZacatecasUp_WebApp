import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Negocio } from '../../../../clases/negocio';

@Component({
  selector: 'app-ms-descripcion-negocio',
  templateUrl: './descripcion.component.html',
  styleUrls: ['./descripcion.component.scss']
})
export class DescripcionComponent implements OnInit {

  caracteristicas: any[];

  @Input('item') item: Negocio;
  @Input('isNew') isNew: boolean;

  constructor() { }

  ngOnInit() {
  }

}
