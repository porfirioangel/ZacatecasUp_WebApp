import {AuthService} from '../../../services/auth.service';
import {fadeInAnimation} from '../../../route.animation';
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'ms-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  host: {
    '[@fadeInAnimation]': 'true'
  },
  animations: [ fadeInAnimation ]
})
export class ForgotPasswordComponent implements OnInit {

  email: string;
  password: string;

  constructor(private router: Router,
              private snackBar: MatSnackBar,
              private authService: AuthService
  ) { }

  ngOnInit() {
  }

  send() {
    this.authService.resetPassword(this.email).then(() => {

      this.snackBar.open('Para proceder verifique su correo', 'Cerrar', {
        duration: 3000
      });
      this.router.navigate(['/login']);
    }).catch((error) => {
      this.snackBar.open('Upps! hubo un error', 'Cerrar', {
        duration: 3000
      });
    })
  }

}
