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
  selector: 'app-ms-negocios',
  templateUrl: './negocios.component.html',
  styleUrls: ['./negocios.component.scss'],
  host: {
    '[@routeAnimation]': 'true'
  },
  animations: [routeAnimation]
})
export class NegociosComponent implements OnInit {

  itemSelected: Local;

  camionForm: FormGroup;

  isNew = true;
  rows: any[];
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
    this.rows = [
      {
        'name': {
          'first': 'Debora',
          'last': 'Castro'
        },
        'picture': 'assets/img/avatars/15.png',
        'company': 'SIGNIDYNE',
        'email': 'debora.castro@signidyne.ca',
        'phone': '+1 (979) 427-3700',
        'balance': '$1,743.04'
      },
      {
        'name': {
          'first': 'Warren',
          'last': 'Gallegos'
        },
        'picture': 'assets/img/avatars/8.png',
        'company': 'XSPORTS',
        'email': 'warren.gallegos@xsports.biz',
        'phone': '+1 (964) 433-3008',
        'balance': '$1,122.90'
      },
      {
        'name': {
          'first': 'Gordon',
          'last': 'Sloan'
        },
        'picture': 'assets/img/avatars/17.png',
        'company': 'FUTURIS',
        'email': 'gordon.sloan@futuris.com',
        'phone': '+1 (904) 572-2860',
        'balance': '$1,505.24'
      },
      {
        'name': {
          'first': 'Nettie',
          'last': 'Hoover'
        },
        'picture': 'assets/img/avatars/5.png',
        'company': 'UNEEQ',
        'email': 'nettie.hoover@uneeq.us',
        'phone': '+1 (943) 579-2855',
        'balance': '$2,206.32'
      },
      {
        'name': {
          'first': 'Bartlett',
          'last': 'Kramer'
        },
        'picture': 'assets/img/avatars/13.png',
        'company': 'MIXERS',
        'email': 'bartlett.kramer@mixers.co.uk',
        'phone': '+1 (897) 410-2327',
        'balance': '$1,220.73'
      },
      {
        'name': {
          'first': 'Martina',
          'last': 'Barnes'
        },
        'picture': 'assets/img/avatars/17.png',
        'company': 'VERAQ',
        'email': 'martina.barnes@veraq.biz',
        'phone': '+1 (917) 535-3821',
        'balance': '$1,236.69'
      },
      {
        'name': {
          'first': 'Vasquez',
          'last': 'Pugh'
        },
        'picture': 'assets/img/avatars/8.png',
        'company': 'MOMENTIA',
        'email': 'vasquez.pugh@momentia.net',
        'phone': '+1 (903) 505-2458',
        'balance': '$1,734.39'
      },
      {
        'name': {
          'first': 'Moran',
          'last': 'Burris'
        },
        'picture': 'assets/img/avatars/9.png',
        'company': 'ZOLAVO',
        'email': 'moran.burris@zolavo.org',
        'phone': '+1 (985) 531-3293',
        'balance': '$2,320.01'
      },
      {
        'name': {
          'first': 'Kayla',
          'last': 'Langley'
        },
        'picture': 'assets/img/avatars/6.png',
        'company': 'ELECTONIC',
        'email': 'kayla.langley@electonic.tv',
        'phone': '+1 (901) 473-2752',
        'balance': '$2,600.99'
      },
      {
        'name': {
          'first': 'Hutchinson',
          'last': 'Golden'
        },
        'picture': 'assets/img/avatars/4.png',
        'company': 'CEDWARD',
        'email': 'hutchinson.golden@cedward.name',
        'phone': '+1 (906) 540-2818',
        'balance': '$3,077.00'
      },
      {
        'name': {
          'first': 'Cherry',
          'last': 'Pollard'
        },
        'picture': 'assets/img/avatars/6.png',
        'company': 'ZOXY',
        'email': 'cherry.pollard@zoxy.io',
        'phone': '+1 (962) 591-3338',
        'balance': '$2,528.52'
      },
      {
        'name': {
          'first': 'Samantha',
          'last': 'Flowers'
        },
        'picture': 'assets/img/avatars/4.png',
        'company': 'COMTOUR',
        'email': 'samantha.flowers@comtour.me',
        'phone': '+1 (948) 513-3422',
        'balance': '$3,517.51'
      }
    ];
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
