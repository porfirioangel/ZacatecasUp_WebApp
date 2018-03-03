import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Local} from '../clases/local';
import {environment} from '../../environments/environment';

@Injectable()
export class LocalesService {


  dbPath = environment.api + '/local';
  locales: Local[];


  constructor() {

    this.locales = [{
      id: 'manuelharo12423',
      nombre: 'Roy'
    },
      {
        id: 'dkjdkasd23',
        nombre: 'Burritos La Palma'
      }
    ]
  }


  getList(): Local[] {
    return this.locales;
  }

  addItem(item: Local) {
    this.locales.push(item);
    console.log('addItem', item);
    return true;
  }

  updateItem(id: string, item: Local) {
    console.log('updateItem', id, item);
    return true;
  }

  deleteItem(id: string) {
    console.log('deleteItem', id);
    this.locales.pop();
    return true;
  }

}
