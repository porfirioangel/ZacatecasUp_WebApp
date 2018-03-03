import {Injectable} from '@angular/core';
import {SidenavService} from '../core/sidenav/sidenav.service';
import {SidenavItem} from '../core/sidenav/sidenav-item/sidenav-item.model';
import {Subscription} from 'rxjs/Subscription';
import {LocalesService} from './locales.service';

@Injectable()
export class SidenavCounterService {

  localesNav: any;
  private _itemsSubscription: Subscription;

  constructor(private sidenavService: SidenavService,
              private localesService: LocalesService) {

    this._itemsSubscription = this.sidenavService.items$
      .subscribe((items: SidenavItem[]) => {
        items.forEach((side, index) => {

          if (side['route'] === '/locales') {
            this.localesNav = side;
          }
        });
      });

    this.localesNav['badge'] = '10';

  }
}
