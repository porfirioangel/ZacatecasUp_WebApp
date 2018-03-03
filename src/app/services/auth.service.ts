import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../clases/user';


@Injectable()
export class AuthService {

  user: User;

  constructor(private router: Router) {

    // this.router.navigate(['/']);

  }

  getUser(): User {
    return this.user;
  }


  signUpWithEmail(email: string, password: string) {
    console.log('signUpWithEmail', email, password)
    return new Promise( function () {
      return true;
    });
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
    console.log('resetPassword', email)
    return new Promise( function () {
      return true;
    });
  }

  isLoggedIn(): boolean {
    console.log('isLoggedIn', true);
    return true;
  }

  logout() {
    console.log('logout')
  }

}
