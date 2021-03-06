import { BaseService } from './base.service';
import {Injectable, Inject} from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../clases/user';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {MatSnackBar} from '@angular/material';
import { RequestOptions } from '@angular/http';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Injectable()
export class AuthService {

  user: User;
  headers: HttpHeaders;


  constructor(private router: Router,
    private http: HttpClient,
    private snackBar: MatSnackBar,
    private baseService: BaseService,
    @Inject(LOCAL_STORAGE) private storage: WebStorageService) {

      const params = {
        token : this.storage.get('token'),
      }

      this.baseService.post('check_login', params)
          .then((response) => {
            if (response.token) {
              this.user = response as User;
              this.router.navigate(['/']);
            } else {
              this.router.navigate(['/login']);
            }
          })
          .catch((error) => {
            this.router.navigate(['/login']);
          });
  }

  public getUser(): User {
    console.log('getUser()', this.user)
    return this.user;
  }
  signUpWithEmail(email: string, password: string) {
    console.log('signUpWithEmail', email);
    const body = new HttpParams()
      .set('email', email)
      .set('password', password);


      const params = {
        email: email,
        password: password
      }

    this.http.post(environment.api + 'login', params).subscribe((data: any) => {
      console.log('data', data);
      this.storage.set('token', data.token);

      this.router.navigate(['/']);
      return data;
    }, (error) => {
      console.log('error', error.error.error);
      this.snackBar.open(error.error.error, 'Cerrar', {
        duration: 3000
      });
      return error;
    })
  }

  updateUser(userUpdated: User) {
    console.log('updateUser', userUpdated)
  }

  registerUser(userRegister: User) {
    console.log('registerUser', userRegister)
    userRegister.tipo_usuario = 'UsuarioNormal'

    const fecha  = new Date(userRegister.fecha_nacimiento);
    const ano = fecha.getFullYear();
    const mes = fecha.getMonth() + 1;
    const dia = fecha.getDay();
    userRegister.fecha_nacimiento = ano + '-' + mes + '-' + dia;

    return new Promise<any>((resolve, reject) => {
      this.http.post(environment.api + 'registrar_usuario', userRegister)
          .toPromise()
          .then((response) => {
            this.snackBar.open('Te haz registrado correctamente', 'Cerrar', {
              duration: 3000
            });
            resolve(response);
          })
          .catch((error) => {
            console.log('error', error.error.error);
            this.snackBar.open(error.error.error, 'Cerrar', {
              duration: 3000
            });
            reject(error);
          });
    });
  }

  deleteUser(user) {
    console.log('Delete this user...', user);
  }

  disableUser(user) {
    console.log('Disable this user...', user);
  }


  resetPassword(email: string) {
    console.log('resetPassword', email);
    return new Promise(function () {
      return true;
    });
  }

  isLoggedIn(): boolean {
    console.log('isLoggedIn', true);
    return true;
  }

  logout() {
      this.baseService.post('logout', {})
          .then((response) => {
            console.log('Logout', response);
            this.storage.set('token', null);
            this.router.navigate(['/login']);
          })
          .catch((error) => {
            console.log('POST request error', error);
          });
  }

}
