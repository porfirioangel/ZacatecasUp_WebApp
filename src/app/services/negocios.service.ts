import { environment } from './../../environments/environment';
import { Negocio } from './../clases/negocio';
import {Injectable} from '@angular/core';
import {BaseService} from './base.service';
import {Http} from '@angular/http';

@Injectable()
export class NegociosService {

  negocios: Negocio[];

  constructor(private baseService: BaseService, public http: Http) {
    this.negocios = [];
  }


  getList(): Promise<Negocio[]> {
    const url = environment.api + 'catalogo_negocios';


        const params = {
            params: {}
        };

        return new Promise<Negocio[]>((resolve, reject) => {
            this.http.get(url, params)
                .toPromise()
                .then((response) => {
                    console.log('GET request', response.url);
                    resolve(response.json() as Negocio[]);
                })
                .catch((error) => {
                    reject(error.json());
                });
        });

  }

  addItem(item: Negocio) {
    this.negocios.push(item);
    console.log('addItem', item);
    this.baseService.create(item).then((local: any) => {
      return local;
    }).catch((error) => {
      return error;
    });
  }

  updateItem(id: string, item: Negocio) {
    console.log('updateItem', id, item);
    this.baseService.create(item).then((local: any) => {
      return local;
    }).catch((error) => {
      return error;
    });
  }

  deleteItem(id: string) {
    console.log('deleteItem', id);
    this.negocios.pop();
    this.baseService.create(id).then((local: any) => {
      return local;
    }).catch((error) => {
      return error;
    });
    return true;
  }

}
