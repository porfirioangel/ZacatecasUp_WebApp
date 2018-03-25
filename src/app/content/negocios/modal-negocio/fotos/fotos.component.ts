import { environment } from './../../../../../environments/environment.prod';
import { Negocio } from './../../../../clases/negocio';
import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-negocios-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.scss']
})
export class FotosComponent implements OnInit {


  @Input('item') item: Negocio;
  @Input('isNew') isNew: boolean;

  url = environment.host;

  fileLogo;
  fileGal1;
  fileGal2;
  fileGal3;

  imgRefresh = false;

  random: number;

  constructor(private http: HttpClient) { }

  ngOnInit() {
      setInterval(() => {
        this.random  = Math.random();
      }, 1000)
  }


  uploadLogo(event) {
    this.imgRefresh = true
    const selectedFiles = event.target.files;
    this.fileLogo = selectedFiles.item(0);
    console.log(this.fileLogo)

    const url = environment.host + '/upload.php'
    const img = this.item.logotipo.replace('/uploads/', '');
    const formData: FormData = new FormData();
    formData.append('file', this.fileLogo, img);
    formData.append('fileName', 'hola');
    this.http.post(url, formData)
    .toPromise()
    .then((response: any) => {
        this.imgRefresh = false
    })
    .catch((error) => {
        console.log('POST request error', error);
    });
  }


  uploadGal1(event) {
    this.imgRefresh = true
    const selectedFiles = event.target.files;
    this.fileGal1 = selectedFiles.item(0);
    console.log(this.fileGal1)

    const url = environment.host + '/upload.php'
    const img = this.item.galeria[0].replace('/uploads/', '');
    const formData: FormData = new FormData();
    formData.append('file', this.fileGal1, img);
    formData.append('fileName', 'hola');
    this.http.post(url, formData)
    .toPromise()
    .then((response: any) => {
        this.imgRefresh = false
    })
    .catch((error) => {
        console.log('POST request error', error);
    });
  }

  uploadGal2(event) {
    this.imgRefresh = true
    const selectedFiles = event.target.files;
    this.fileGal2 = selectedFiles.item(0);
    console.log(this.fileGal2)

    const url = environment.host + '/upload.php'
    const img = this.item.galeria[1].replace('/uploads/', '');
    const formData: FormData = new FormData();
    formData.append('file', this.fileGal2, img);
    formData.append('fileName', 'hola');
    this.http.post(url, formData)
    .toPromise()
    .then((response: any) => {
        this.imgRefresh = false
    })
    .catch((error) => {
        console.log('POST request error', error);
    });
  }

  uploadGal3(event) {
    this.imgRefresh = true
    const selectedFiles = event.target.files;
    this.fileGal3 = selectedFiles.item(0);
    console.log(this.fileGal3)

    const url = environment.host + '/upload.php'
    const img = this.item.galeria[2].replace('/uploads/', '');
    const formData: FormData = new FormData();
    formData.append('file', this.fileGal3, img);
    formData.append('fileName', 'hola');
    this.http.post(url, formData)
    .toPromise()
    .then((response: any) => {
        this.imgRefresh = false
    })
    .catch((error) => {
        console.log('POST request error', error);
    });
  }
}
