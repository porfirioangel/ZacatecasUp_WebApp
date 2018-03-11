import { environment } from './../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {fadeInAnimation} from '../../../route.animation';
import {Router} from '@angular/router';
import { User } from '../../../clases/user';
import { log } from 'util';

@Component({
  selector: 'ms-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  host: {
    '[@fadeInAnimation]': 'true'
  },
  animations: [ fadeInAnimation ]
})
export class RegisterComponent implements OnInit {

  user: User = {};
  file;

  constructor(
    private router: Router,
    private http: HttpClient) { }

  ngOnInit() {
  }

  register() {
    this.router.navigate(['/']);
  }

  uploadImgProfile(event) {
    const selectedFiles = event.target.files;
    this.file = selectedFiles.item(0);
  }


  uplodadImg(img) {
    const url = environment.host + '/upload.php'
    img = img.replace('/uploads/', '');
    const formData: FormData = new FormData();
    formData.append('file', this.file);
    formData.append('fileName', 'hola');
    this.http.post(url, formData)
    .toPromise()
    .then((response: any) => {
        console.log('Logout', response);
    })
    .catch((error) => {
        console.log('POST request error', error);
    });
  }
}
