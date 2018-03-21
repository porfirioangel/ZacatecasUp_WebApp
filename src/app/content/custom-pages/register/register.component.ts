import { AuthService } from './../../../services/auth.service';
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
  img = false;
  constructor(
    private router: Router,
    private service: AuthService,
    private http: HttpClient) { }

  ngOnInit() {
  }

  register() {
    console.log('REGISTER', this.user);
    this.service.registerUser(this.user).then(data => {
      console.log('user', data)
      this.uplodadImg(data.profile_photo)
    });
  }

  uploadImgProfile(event) {
    const selectedFiles = event.target.files;
    this.file = selectedFiles.item(0);
    this.img = true;
    console.log(this.file);
  }


  uplodadImg(img) {
    const url = environment.host + '/upload.php'
    img = img.replace('/uploads/', '');
    const formData: FormData = new FormData();
    formData.append('file', this.file, img);
    formData.append('fileName', 'hola');
    this.http.post(url, formData)
    .toPromise()
    .then((response: any) => {
        console.log('IMG', response);
        this.router.navigate(['/login']);
    })
    .catch((error) => {
        console.log('POST request error', error);
    });
  }
}
