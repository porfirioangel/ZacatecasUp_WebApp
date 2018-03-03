import {Injectable} from '@angular/core';
import {Upload} from '../clases/upload';

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
