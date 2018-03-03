import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'ms-eliminate-dialog',
  templateUrl: './eliminate-dialog.component.html',
  styleUrls: ['./eliminate-dialog.component.scss']
})
export class EliminateDialogComponent implements OnInit {

  mensaje = '¿Desea eliminarlo?';

  constructor(public dialogRef: MatDialogRef<EliminateDialogComponent>) {
  }

  ngOnInit() {
  }

}
