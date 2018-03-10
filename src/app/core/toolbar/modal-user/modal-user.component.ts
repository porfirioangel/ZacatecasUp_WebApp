import {Component, OnInit} from '@angular/core';
import {User} from '../../../clases/user';
import {Upload} from '../../../clases/upload';
import {AuthService} from '../../../services/auth.service';
import {UploadService} from '../../../services/upload.service';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'ms-modal-user',
  templateUrl: './modal-user.component.html',
  styleUrls: ['./modal-user.component.scss']
})
export class ModalUserComponent implements OnInit {

  user: User;
  selectedFilesUserModal: FileList;
  currentUploadUserModal: Upload;
  isUploadingPhotoUserModal = false;

  constructor(private authService: AuthService, private upSvc: UploadService, public dialogRefUserModal: MatDialogRef<ModalUserComponent>) {

  }

  ngOnInit() {
    const userLog = this.authService.getUser();
    this.user = {};
  }


  uploadImgProfile(event) {
  }

  updateUser() {
    this.authService.updateUser(this.user);
  }

}
