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

  camionForm: FormGroup;

  isNew = true;
  rows: Negocio[];
  searchTerm: string;


  /*
  'nombre',
        'latitud',
        'longuitud',
        'descripcion_breve',
        'descripcion_completa',
        'url_logo',
        'sitio_web',
        'facebook',
        'categoria_negocio_id',
        'suscripcion_id',
*/


  selectedFiles: FileList;
  currentUpload: Upload;
  isUploadingPhoto = false;
  dialogRef: MatDialogRef<ModalNegocioComponent>;

  constructor(private fb: FormBuilder,
              private upSvc: UploadService,
              private snackBar: MatSnackBar,
              private dialog: MatDialog,
              private service: NegociosService) {
    this.buildForm()
  }

  detectFiles(event) {
    this.isUploadingPhoto = true;
    this.selectedFiles = event.target.files;
  }

  buildForm() {
    this.camionForm = this.fb.group({
      identificador: ['', [Validators.required]],
      marca: ['', [Validators.required]],
      modelo: ['', [Validators.required]],
      placas: ['', [Validators.required]],
      ano: ['', [Validators.required]],
      img: ['assets/img/common/no-image.gif']
    })
  }

  ngOnInit() {
    this.service.getList().then((negocios) => {
        this.rows = negocios
        console.log('Rows <>', this.rows);
    })
  }


  selectRow(row) {
    this.itemSelected = row;
    this.camionForm.patchValue(row);
    this.isNew = false;
  }

  search($event) {
    this.searchTerm = $event.target.value;
    console.log('>>>', this.searchTerm);
  }

  openNew() {
    this.dialogRef = this.dialog.open(ModalNegocioComponent, {
      disableClose: false
    });
  }

  addItem(values) {
    this.service.addItem(values);
    this.camionForm.reset();
    this.isNew = true;
    this.snackBar.open('Se agregó correctamente', 'Cerrar', {
      duration: 3000
    });
  }

  newItem() {
    this.camionForm.reset();
    this.itemSelected = {};
    this.camionForm.value.img = 'assets/img/common/no-image.gif';
    this.isNew = true;
  }

  updateItem(values) {
    // this.service.updateItem(this.itemSelected.id, values);
    this.camionForm.reset();
    this.isNew = true;
    this.snackBar.open('Se actualizó correctamente', 'Cerrar', {
      duration: 3000
    });
  }

  deleteItem(key) {
    this.dialogRef = this.dialog.open(EliminateDialogComponent, {
      disableClose: false
    });

    this.dialogRef.afterClosed().subscribe(result => {
      this.dialogRef = null;
      if (result) {
        this.service.deleteItem(key);

        this.snackBar.open('Se eliminó correctamente', 'Cerrar', {
          duration: 3000
        });

        setTimeout(() => {
          this.camionForm.reset();
          this.isNew = true;
        }, 50);
      }
    });
  }

}
