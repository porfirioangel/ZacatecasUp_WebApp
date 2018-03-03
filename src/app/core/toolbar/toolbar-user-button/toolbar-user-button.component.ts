import {Component, OnInit} from '@angular/core';
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
    displayName: 'Santiago García Cabral',
    email: 'email@gmail.com',
    photoURL: 'https://i.pinimg.com/avatars/porfirioads_1497321963_280.jpg'
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
