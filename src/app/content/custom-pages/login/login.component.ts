import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {fadeInAnimation} from '../../../route.animation';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'ms-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  host: {
    '[@fadeInAnimation]': 'true'
  },
  animations: [fadeInAnimation]
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(private router: Router,
              private authService: AuthService) {
  }

  ngOnInit() {
  }

  login() {
    console.log('Login')
    this.authService.signUpWithEmail(this.email, this.password).then(() => {

    }).catch(_error => {

    });


  }

}
