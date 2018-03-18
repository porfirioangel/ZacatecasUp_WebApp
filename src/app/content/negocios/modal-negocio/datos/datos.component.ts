import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Negocio } from '../../../../clases/negocio';

@Component({
  selector: 'app-ms-datos-negocio',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.scss']
})
export class DatosComponent implements OnInit {

  tags = [];
  @Input('item') item: Negocio;
  @Input('isNew') isNew: boolean;

  form: FormGroup;



  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    if (this.isNew) {

    } else {
      this.buildFormEdit();
      // this.form.patchValue(this.item);
    }
  }

  buildFormEdit(): void {
    console.log('ITEM', this.item)
    this.form = this.fb.group({
      nombre: ['', [Validators.required]],
      sitio_web: ['', []],
      facebook: ['', []],
      palabras_clave: ['', [Validators.required]],
      descripcion_breve: ['', [Validators.required]],
    })
  }


}
