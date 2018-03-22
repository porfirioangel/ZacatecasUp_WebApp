import { Categoria } from './../clases/categoria';
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
      console.log('Refresh Negocios');
      this.baseService.post('catalogo_negocios', {})
        .then((response) => {
          this.negocioSubject.next(response);
        })
        .catch((error) => {
          // return (error);
        });
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

    addItem(item: Negocio): Promise<Negocio> {

        item.descripcion_completa = JSON.stringify(item.descripcion_completa)

        return new Promise<Negocio>((resolve, reject) => {
            this.baseService.post('registrar_negocio', item)
                .then((response) => {
                    resolve(response.json() as Negocio);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    getCategorias(): Promise<Categoria[]> {

        return new Promise<Categoria[]>((resolve, reject) => {
            this.baseService.get('obtener_categorias_negocio_ids', {})
                .then((response) => {
                    resolve(response.json() as Categoria[]);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    updateItem(id: number, item: Negocio) {
        item.descripcion_completa = JSON.stringify(item.descripcion_completa)
        console.log('updateItem', id, item);
        return new Promise<Negocio>((resolve, reject) => {
            this.baseService.put('actualizar_negocio', item)
                .then((response) => {
                    resolve(response.json() as Negocio);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    deleteItem(id: number) {
        console.log('deleteItem', id);
        const params = {
            id: id
        }
        return new Promise<Negocio>((resolve, reject) => {
            this.baseService.delete('eliminar_negocio', params)
                .then((response) => {
                    resolve(response);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }
}
