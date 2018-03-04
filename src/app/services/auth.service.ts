import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../clases/user';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {MatSnackBar} from '@angular/material';

@Injectable()
export class AuthService {

  user: User;
  headers: HttpHeaders;


  constructor(private router: Router, private http: HttpClient, private snackBar: MatSnackBar,) {
  }

  getUser(): User {
    return this.user;
  }
  signUpWithEmail(email: string, password: string) {
    console.log('signUpWithEmail', email, password);
    const body = new HttpParams()
      .set('email', email)
      .set('password', password);

    this.http.post(environment.api + 'login',
      body.toString(),
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
      }
    ).subscribe((data) => {
      console.log('data', data);
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
    console.log('logout')
    this.router.navigate(['/login']);
  }

}
