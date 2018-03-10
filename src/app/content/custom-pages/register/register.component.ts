import {Component, OnInit} from '@angular/core';
import {fadeInAnimation} from '../../../route.animation';
import {Router} from '@angular/router';
import { User } from '../../../clases/user';

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

  user: User
  first: string;
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  register() {
    this.router.navigate(['/']);
  }

}
