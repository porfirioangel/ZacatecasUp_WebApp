import { Negocio } from './../../../../clases/negocio';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-negocios-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.scss']
})
export class FotosComponent implements OnInit {


  @Input('item') item: Negocio;
  @Input('isNew') isNew: boolean;


  constructor() { }

  ngOnInit() {
  }

}
