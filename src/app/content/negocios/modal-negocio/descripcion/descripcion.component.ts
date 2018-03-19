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
  elemento;

  select;
  tipo
  titulo;
  descripcion;
  mostrar =  true;

  constructor() { }

  ngOnInit() {
  }


  refresh() {
    this.mostrar = false;
    setInterval(() => {
      this.mostrar =  true;
    }, 500);
  }

  getKey (key: string): string {
      key = key.toLowerCase();
      key = key.replace(/á/g, 'a').replace(/é/g, 'e').replace(/í/g, 'i').replace(/ó/g, 'o').replace(/ú/g, 'u')
    return key;
  }

  addElement() {
    const key =   this.getKey(this.titulo);
    this.item.descripcion_completa[key] = {
      'tipo': this.tipo ? 'texto' : 'lista',
      'titulo': this.titulo,
      'contenido': this.tipo ? this.descripcion : this.caracteristicas
    }
    this.refresh();
  }


  selectItem(item) {
    this.titulo = item.titulo
    if (item.tipo === 'lista') {
      this.tipo = false;
      this.caracteristicas = item.contenido;
    } else {
      this.tipo = true;
      this.descripcion = item.contenido;
    }
  }
  deleteItem(item) {
    const key = this.getKey(item.titulo)
    delete this.item.descripcion_completa[key];
    this.refresh();
  }

}
