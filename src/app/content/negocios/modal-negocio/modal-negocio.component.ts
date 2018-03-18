import { Negocio } from './../../../clases/negocio';
import { NegociosService } from './../../../services/negocios.service';
import { MatDialogRef } from '@angular/material';
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
  constructor(public dialogRef: MatDialogRef<ModalNegocioComponent>,
              private negociosService: NegociosService,
              @Inject(MAT_DIALOG_DATA) public data: any ) {

                console.log('ID', data);
                if (data) {
                  this.isNew = false;
                  this.getNegocio(data.id)
                } else {
                  this.isNew = false;
                }
   }

  ngOnInit() {
  }

  getNegocio(id) {
    this.negociosService.getDetalleNegocio(id).then(data => {
      console.log('NEGOCIO', data);
      this.negocio = data;
    })
  }

}
