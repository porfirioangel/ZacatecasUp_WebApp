import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ms-descripcion-negocio',
  templateUrl: './descripcion.component.html',
  styleUrls: ['./descripcion.component.scss']
})
export class DescripcionComponent implements OnInit {

  listaDescripcion = [
    {id: 1, llave: 'telefono', valor: '4941355886' },
    {id: 1, llave: 'hola', valor: '4941355886' }
  ]
  caracteristicas: any[];

  constructor() { }

  ngOnInit() {
  }

}
