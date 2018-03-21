import { MatDialog } from '@angular/material';
import { EliminateDialogComponent } from './../../eliminate-dialog/eliminate-dialog.component';
import { Negocio } from './../../../clases/negocio';
import { NegociosService } from './../../../services/negocios.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import {Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-ms-modal-negocio',
  templateUrl: './modal-negocio.component.html',
  styleUrls: ['./modal-negocio.component.scss']
})
export class ModalNegocioComponent implements OnInit {

  isNew: boolean;
  negocio: Negocio = new Negocio;
  isValid =  false;
  form: FormGroup;




  constructor(public dialogRef: MatDialogRef<ModalNegocioComponent>,
              private negociosService: NegociosService,
              private snackBar: MatSnackBar,
              private fb: FormBuilder,
              private dialog: MatDialog,
              @Inject(MAT_DIALOG_DATA) public data: any ) {

                console.log('ID', data);
                if (data) {
                  this.isNew = false;
                  this.getNegocio(data.id)
                } else {
                  this.isNew = true;
                }
   }

  ngOnInit() {
    this.buildFormEdit();
  }

  buildFormEdit(): void {
    this.form = this.fb.group({
    nombre: ['', [Validators.required]],
    categoria_negocio_id: ['', [Validators.required]],
    sitio_web: ['', []],
    facebook: ['', []],
    palabras_clave: ['', [Validators.required]],
    descripcion_breve: ['', [Validators.required]],
  })
}

  getNegocio(id) {
    this.negociosService.getDetalleNegocio(id).then(data => {
      console.log('NEGOCIO', data);
      this.negocio = data;
    })
  }

  actualizar() {
    console.log('ACTIALIZAR', this.negocio);
    this.negociosService.updateItem(this.negocio.id, this.negocio)
    .then((data) => {
      this.snackBar.open('Se ha actualizado ' + this.negocio.nombre + ' correctamente!', 'Cerrar', {
        duration: 3000
      });
      this.dialogRef.close();
    }).catch(error => {
      this.snackBar.open('Se produjo un error al actualizar ' + this.negocio.nombre + '!', 'Cerrar', {
        duration: 3000
      });
    })
  }

  agregar() {
    console.log('AGREGAR', this.negocio);
    delete this.negocio.galeria;
    this.negociosService.addItem(this.negocio).then((data) => {
      this.snackBar.open('Se ha agregado ' + this.negocio.nombre + ' correctamente!', 'Cerrar', {
        duration: 3000
      });
      this.dialogRef.close();
    }).catch(error => {
      this.snackBar.open('Se produjo un error al agregar ' + this.negocio.nombre + '!', 'Cerrar', {
        duration: 3000
      });
    })
  }
  eliminar() {
    if (confirm('Desea eliminar el negocio ' + this.negocio.nombre)) {
        this.negociosService.deleteItem(this.negocio.id).then(negocio => {
          this.snackBar.open('Se eliminó correctamente ' + this.negocio.nombre + '!', 'Cerrar', {
            duration: 3000
          });
        }).catch(error => {
          this.snackBar.open('No se puedo eliminar el ' + this.negocio.nombre + '!', 'Cerrar', {
            duration: 3000
          });
        })
    } else {

    }
  }
}



