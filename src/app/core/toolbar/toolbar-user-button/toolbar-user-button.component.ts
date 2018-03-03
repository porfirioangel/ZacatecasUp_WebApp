import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {MatDialog, MatDialogRef} from '@angular/material';
import {ModalUserComponent} from '../modal-user/modal-user.component';
import {User} from '../../../clases/user';

@Component({
  selector: 'ms-toolbar-user-button',
  templateUrl: './toolbar-user-button.component.html',
  styleUrls: ['./toolbar-user-button.component.scss']
})
export class ToolbarUserButtonComponent implements OnInit {

  isOpen: boolean;
  dialogRefUserModal: MatDialogRef<ModalUserComponent>;
  user: User = {
    displayName: 'Usuario',
    email: 'email@gmail.com',
    photoURL: 'assets/img/common/no-image.gif'
  };

  constructor(public dialog: MatDialog) {

  }

  ngOnInit() { }


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
  }
}
