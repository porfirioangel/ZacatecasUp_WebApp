import {Injectable} from '@angular/core';
import {Local} from '../clases/local';
import {BaseService} from './base.service';

@Injectable()
export class LocalesService {

  locales: Local[];

  constructor(private baseService: BaseService) {

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


  getList(): Promise<Local[]> {
    return this.baseService.find().then((locales: any) => {
      return this.locales;
    }).catch((error) => {
      return error;
    });
  }

  addItem(item: Local) {
    this.locales.push(item);
    console.log('addItem', item);
    this.baseService.create(item).then((local: any) => {
      return local;
    }).catch((error) => {
      return error;
    });
  }

  updateItem(id: string, item: Local) {
    console.log('updateItem', id, item);
    this.baseService.create(item).then((local: any) => {
      return local;
    }).catch((error) => {
      return error;
    });
  }

  deleteItem(id: string) {
    console.log('deleteItem', id);
    this.locales.pop();
    this.baseService.create(id).then((local: any) => {
      return local;
    }).catch((error) => {
      return error;
    });
    return true;
  }

}
