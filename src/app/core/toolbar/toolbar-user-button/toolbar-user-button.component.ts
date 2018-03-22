import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import {ModalUserComponent} from '../modal-user/modal-user.component';
import {User} from '../../../clases/user';
import {AuthService} from '../../../services/auth.service';
import {environment} from '../../../../environments/environment';
import 'rxjs/add/observable/interval';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'ms-toolbar-user-button',
  templateUrl: './toolbar-user-button.component.html',
  styleUrls: ['./toolbar-user-button.component.scss']
})
export class ToolbarUserButtonComponent implements OnInit {

  isOpen: boolean;
  dialogRefUserModal: MatDialogRef<ModalUserComponent>;
  user: User = {
    nombre: '',
    email: '',
    profile_photo: ''
  };

  constructor(public dialog: MatDialog, private authService: AuthService) {
    const staticThis = this;

    Observable.interval(10000)
      .subscribe((val) => {
        const user = staticThis.authService.getUser();
        const profilePhoto = environment.host + user.profile_photo;
        // console.log('photo', profilePhoto);
        // console.log('nombre', user.nombre);
        staticThis.user.profile_photo = profilePhoto;
        staticThis.user.nombre = user.nombre;
      });
  }

  ngOnInit() {

  }


  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  onClickOutside() {
    this.isOpen = false;
  }

  profileModal() {
    this.dialogRefUserModal = this.dialog.open(ModalUserComponent, {
      disableClose: false
    });

    this.dialogRefUserModal.afterClosed().subscribe(result => {
      this.dialogRefUserModal = null;
    });
  }

  logout() {
    this.authService.logout();
  }
}
