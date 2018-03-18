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

  constructor(public dialogRef: MatDialogRef<ModalNegocioComponent>, @Inject(MAT_DIALOG_DATA) public data: any ) {
    console.log('data', data);
   }

  ngOnInit() {
  }

}
