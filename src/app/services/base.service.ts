import { WebStorageService, LOCAL_STORAGE } from 'angular-webstorage-service';
import {Headers, Http} from '@angular/http';
import {Inject, Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {environment} from '../../environments/environment';

@Injectable()
export class BaseService {
  api: String;
  http: Http;
  modelName: string;
  model: any;

  constructor(@Inject(Http) http: Http, @Inject(LOCAL_STORAGE) private storage: WebStorageService) {
    this.http = http;
    this.api = environment.api
  }

  get(url: string, params: any): Promise<any> {
    const urlReq = environment.api + url;

    params.token = this.storage.get('token');
    console.log('>>GET<<<', url, params);

    return new Promise<any>((resolve, reject) => {
        this.http.get(urlReq, params)
            .toPromise()
            .then((response) => {
                console.log('GET request', response.url);
                resolve (response);
            })
            .catch((error) => {
              reject (error);
            });
    });
 }


  post(url: string, params: any): Promise<any> {
    const urlReq = environment.api + 'detalles_negocio';

    params.token = this.storage.get('token');

    console.log('>>POST<<<', url, params);

    return new Promise<any>((resolve, reject) => {
        this.http.post(urlReq, params)
            .toPromise()
            .then((response) => {
                console.log('POST request', response.url);
                resolve(response.json());
            })
            .catch((error) => {
                reject(error.json());
            });
    });
  }

  put(url: string, params: any): Promise<any> {
    const urlReq = environment.api + 'detalles_negocio';

    params.token = this.storage.get('token');

    console.log('>>POST<<<', url, params);

    return new Promise<any>((resolve, reject) => {
        this.http.put(urlReq, params)
            .toPromise()
            .then((response) => {
                console.log('POST request', response.url);
                resolve(response.json());
            })
            .catch((error) => {
                reject(error.json());
            });
    });
  }


  delete(url: string, params: any): Promise<any> {
    const urlReq = environment.api + 'detalles_negocio';

    params.token = this.storage.get('token');

    console.log('>>POST<<<', url, params);

    return new Promise<any>((resolve, reject) => {
        this.http.delete(urlReq, params)
            .toPromise()
            .then((response) => {
                console.log('POST request', response.url);
                resolve(response.json());
            })
            .catch((error) => {
                reject(error.json());
            });
    });
  }
}
