import { Categoria } from './../../../../clases/categoria';
import { Component, OnInit, Input } from '@angular/core';
import { Negocio } from '../../../../clases/negocio';
import { FormGroup } from '@angular/forms';
import { NegociosService } from '../../../../services/negocios.service';

@Component({
  selector: 'app-ms-datos-negocio',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.scss']
})
export class DatosComponent implements OnInit {

  tags = [];
  @Input('item') item: Negocio;
  @Input('isNew') isNew: boolean;
  @Input('form') form: FormGroup;

  categorias: Categoria[];
  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  constructor(private negocioService: NegociosService) { }

  ngOnInit() {
    this.negocioService.getCategorias().then(categorias  => {
        this.categorias = categorias;
    })
  }

}
