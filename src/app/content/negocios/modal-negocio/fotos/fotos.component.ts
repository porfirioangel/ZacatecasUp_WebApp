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

  imgRefresh = false;

  constructor(private http: HttpClient) { }

  ngOnInit() {
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
        console.log('IMG', response);
    })
    .catch((error) => {
        console.log('POST request error', error);
    });
  }


  uploadGal1(event) {
    this.imgRefresh = false
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
        this.imgRefresh = true
        console.log('IMG', response);
    })
    .catch((error) => {
        console.log('POST request error', error);
    });
  }
}
