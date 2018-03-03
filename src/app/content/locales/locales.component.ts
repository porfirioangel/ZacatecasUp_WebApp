import {routeAnimation} from '../../route.animation';
import {Component, OnInit} from '@angular/core';
import {Upload} from '../../clases/upload';
import {Local} from '../../clases/local';
import {UploadService} from '../../services/upload.service';
import {LocalesService} from '../../services/locales.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog, MatDialogRef, MatSnackBar} from '@angular/material';
import {EliminateDialogComponent} from '../eliminate-dialog/eliminate-dialog.component';


@Component({
  selector: 'app-ms-locales',
  templateUrl: './locales.component.html',
  styleUrls: ['./locales.component.scss'],
  host: {
    '[@routeAnimation]': 'true'
  },
  animations: [routeAnimation]
})
export class LocalesComponent implements OnInit {

  itemSelected: Local;

  camionForm: FormGroup;

  isNew = true;
  rows: Local[];


  selectedFiles: FileList;
  currentUpload: Upload;
  isUploadingPhoto = false;
  dialogRef: MatDialogRef<EliminateDialogComponent>;

  constructor(private fb: FormBuilder,
              private upSvc: UploadService,
              private snackBar: MatSnackBar,
              private dialog: MatDialog,
              private localService: LocalesService) {
    this.buildForm()
  }

  detectFiles(event) {
    this.isUploadingPhoto = true;
    this.selectedFiles = event.target.files;
    /*
    const file = this.selectedFiles.item(0);
    this.currentUpload = new Upload(file);
    this.upSvc.pushUpload(this.currentUpload).then((fileUrl) => {
      this.camionForm.value.img = fileUrl + '';
      this.isUploadingPhoto = false;
    }, (error) => {
      this.snackBar.open('Hubo un error al subir la imagen!', 'Cerrar', {
        duration: 3000
      });
    })
    */
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
    this.localService.getList().then((locales) => {
      this.rows = locales;
    })
  }

  selectRow(row) {
    this.itemSelected = row;
    this.camionForm.patchValue(row);
    this.isNew = false;
  }

  addItem(values) {
    this.localService.addItem(values);
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
    this.localService.updateItem(this.itemSelected.id, values);
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
        this.localService.deleteItem(key);

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
