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

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }


  uploadLogo(event) {
    console.log('Cambiar foto perfil');

    const file = event.target.files.item(0);
    const url = environment.host + '/upload.php'

    let img = this.item.logotipo;

    img = img.replace('/uploads/', '');
    const formData: FormData = new FormData();
    formData.append('file', file, img);

    formData.append('fileName', img);
    this.http.post(url, formData)
    .toPromise()
    .then((response: any) => {
        console.log('IMG', response);

    })
    .catch((error) => {
        console.log('POST request error', error);
    });
  }


}