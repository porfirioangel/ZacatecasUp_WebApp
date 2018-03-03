import {Injectable} from '@angular/core';
import {Upload} from '../clases/upload';
import {UUID} from 'angular2-uuid';

@Injectable()
export class UploadService {


  private basePath = '/';

  constructor() {
  }

  pushUpload(upload: Upload) {
    return true;
  }

  private deleteFileData(key: string) {
    return true;
  }

}
