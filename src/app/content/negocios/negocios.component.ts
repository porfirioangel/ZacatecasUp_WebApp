import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment.prod';
import { ModalNegocioComponent } from './modal-negocio/modal-negocio.component';
import {routeAnimation} from '../../route.animation';
import {Component, OnInit} from '@angular/core';
import {Upload} from '../../clases/upload';
import {Negocio} from '../../clases/negocio';
import {UploadService} from '../../services/upload.service';
import {NegociosService} from '../../services/negocios.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog, MatDialogRef, MatSnackBar} from '@angular/material';
import {EliminateDialogComponent} from '../eliminate-dialog/eliminate-dialog.component';


@Component({
  selector: 'app-ms-negocios',
  templateUrl: './negocios.component.html',
  styleUrls: ['./negocios.component.scss'],
  host: {
    '[@routeAnimation]': 'true'
  },
  animations: [routeAnimation]
})
export class NegociosComponent implements OnInit {

  itemSelected: Negocio;
  host = environment.host

  isNew = true;
  rows: Negocio[];
  searchTerm: string;
  private todos: Observable<Negocio[]>;

  url =  environment.host;

  dialogRef: MatDialogRef<ModalNegocioComponent>;

  constructor(private fb: FormBuilder,
              private upSvc: UploadService,
              private snackBar: MatSnackBar,
              private dialog: MatDialog,
              private service: NegociosService) {

  }



  ngOnInit() {
    this.todos = this.service.getList(); // subscribe to entire collection
  }


  selectRow(row) {
    this.itemSelected = row;
  }

  search($event) {
    this.searchTerm = $event.target.value;
  }

  openNew() {
    this.dialogRef = this.dialog.open(ModalNegocioComponent, {
      disableClose: false,
    });
  }

  openEdit(id) {
    this.dialogRef = this.dialog.open(ModalNegocioComponent, {
      disableClose: false,
      data  : {
        id: id
      }
    });
  }
}
