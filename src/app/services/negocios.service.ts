import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { Negocio } from './../clases/negocio';
import {Injectable} from '@angular/core';
import {BaseService} from './base.service';
import {Http} from '@angular/http';

@Injectable()
export class NegociosService {

    private negocioSubject = new BehaviorSubject([]);
    private negocios: Negocio[];


    getList(): Observable<Negocio[]> {
      return this.negocioSubject.asObservable();
    }


    constructor(private baseService: BaseService, public http: Http) {
        this.refresh();
    }

    refresh() {
        setInterval(() => {
            console.log('Refresh Negocios');
                this.baseService.post('catalogo_negocios', {})
                    .then((response) => {
                        this.negocioSubject.next(response);
                        console.log('hola', response);
                        // return (response.json() as Negocio[]);
                    })
                    .catch((error) => {
                    // return (error);
                    });
        }, 5000)
    }



  getDetalleNegocio(id_negocio: number): Promise<Negocio> {

    console.log('id_negocio', id_negocio);

    const params = {
        params: {
            id_negocio: id_negocio
        }
    };

    return new Promise<Negocio>((resolve, reject) => {
        this.baseService.get('detalles_negocio', params)
            .then((response) => {
                resolve(response.json() as Negocio);
            })
            .catch((error) => {
                reject(error.json());
            });
    });
}



  addItem(item: Negocio) {
    this.negocios.push(item);
    console.log('addItem', item);
  }

  updateItem(id: string, item: Negocio) {
    console.log('updateItem', id, item);
  }

  deleteItem(id: string) {
    console.log('deleteItem', id);
    this.negocios.pop();
  }
}
