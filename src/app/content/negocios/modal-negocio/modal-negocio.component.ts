import { MatDialogRef } from '@angular/material';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ms-modal-negocio',
  templateUrl: './modal-negocio.component.html',
  styleUrls: ['./modal-negocio.component.scss']
})
export class ModalNegocioComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ModalNegocioComponent>) { }

  ngOnInit() {
  }

}
