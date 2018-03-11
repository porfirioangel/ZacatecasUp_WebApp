import {Injectable} from '@angular/core';
import {SidenavService} from '../core/sidenav/sidenav.service';
import {SidenavItem} from '../core/sidenav/sidenav-item/sidenav-item.model';
import {Subscription} from 'rxjs/Subscription';
import {NegociosService} from './negocios.service';

@Injectable()
export class SidenavCounterService {

  negociosNav: any;
  private _itemsSubscription: Subscription;

  constructor(private sidenavService: SidenavService,
              private negocioService: NegociosService) {

    this._itemsSubscription = this.sidenavService.items$
      .subscribe((items: SidenavItem[]) => {
        items.forEach((side, index) => {

          if (side['route'] === '/negocios') {
            this.negociosNav = side;
          }
        });
      });


    this.negocioService.getList().then((negocios) => {
        this.negociosNav['badge'] = negocios.length;
    })

  }
}
