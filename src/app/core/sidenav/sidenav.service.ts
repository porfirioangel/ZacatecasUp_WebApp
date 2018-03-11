import {Injectable} from '@angular/core';
import {SidenavItem} from './sidenav-item/sidenav-item.model';
import {BehaviorSubject, Observable} from 'rxjs';
import * as _ from 'lodash';
import {MatSnackBar} from '@angular/material';

@Injectable()
export class SidenavService {

  isIconSidenav: boolean;
  private _itemsSubject: BehaviorSubject<SidenavItem[]> = new BehaviorSubject<SidenavItem[]>([]);
  items$: Observable<SidenavItem[]> = this._itemsSubject.asObservable();
  private _items: SidenavItem[] = [];
  private _currentlyOpenSubject: BehaviorSubject<SidenavItem[]> = new BehaviorSubject<SidenavItem[]>([]);
  currentlyOpen$: Observable<SidenavItem[]> = this._currentlyOpenSubject.asObservable();

  constructor(snackbar: MatSnackBar) {
    const menu = this;

    const dashboard = menu.addItem('Dashboard', 'dashboard', '/', 1);

    menu.addItem('Negocios', 'business', '/negocios', 2, '40', '#4CAF50');
    menu.addItem('Eventos', 'event', '/', 3, '38', '#afa674');
    menu.addItem('Promociones', 'trending_up', '/', 4, '66', '#7986CC');
  }

  private _currentlyOpen: SidenavItem[] = [];

  get currentlyOpen() {
    return this._currentlyOpen;
  }

  addItem(name: string, icon: string, route: any, position: number, badge?: string, badgeColor?: string, customClass?: string) {
    const item = new SidenavItem({
      name: name,
      icon: icon,
      route: route,
      subItems: [],
      position: position || 99,
      badge: badge || null,
      badgeColor: badgeColor || null,
      customClass: customClass || null
    });

    this._items.push(item);
    this._itemsSubject.next(this._items);

    return item;
  }

  addSubItem(parent: SidenavItem, name: string, route: any, position: number) {
    const item = new SidenavItem({
      name: name,
      route: route,
      parent: parent,
      subItems: [],
      position: position || 99
    });

    parent.subItems.push(item);
    this._itemsSubject.next(this._items);

    return item;
  }

  removeItem(item: SidenavItem) {
    const index = this._items.indexOf(item);
    if (index > -1) {
      this._items.splice(index, 1);
    }

    this._itemsSubject.next(this._items);
  }

  isOpen(item: SidenavItem) {
    return (this._currentlyOpen.indexOf(item) !== -1);
  }

  toggleCurrentlyOpen(item: SidenavItem) {
    let currentlyOpen = this._currentlyOpen;

    if (this.isOpen(item)) {
      if (currentlyOpen.length > 1) {
        currentlyOpen.length = this._currentlyOpen.indexOf(item);
      } else {
        currentlyOpen = [];
      }
    } else {
      currentlyOpen = this.getAllParents(item);
    }

    this._currentlyOpen = currentlyOpen;
    this._currentlyOpenSubject.next(currentlyOpen);
  }

  getAllParents(item: SidenavItem, currentlyOpen: SidenavItem[] = []) {
    currentlyOpen.unshift(item);

    if (item.hasParent()) {
      return this.getAllParents(item.parent, currentlyOpen);
    } else {
      return currentlyOpen;
    }
  }

  nextCurrentlyOpen(currentlyOpen: SidenavItem[]) {
    this._currentlyOpen = currentlyOpen;
    this._currentlyOpenSubject.next(currentlyOpen);
  }

  nextCurrentlyOpenByRoute(route: string) {
    let currentlyOpen = [];

    const item = this.findByRouteRecursive(route, this._items);

    if (item && item.hasParent()) {
      currentlyOpen = this.getAllParents(item);
    } else if (item) {
      currentlyOpen = [item];
    }

    this.nextCurrentlyOpen(currentlyOpen);
  }

  findByRouteRecursive(route: string, collection: SidenavItem[]) {
    let result = _.find(collection, {'route': route});

    if (!result) {
      _.each(collection, (item) => {
        if (item.hasSubItems()) {
          const found = this.findByRouteRecursive(route, item.subItems);

          if (found) {
            result = found;
            return false;
          }
        }
      });
    }

    return result;
  }

  getSidenavItemByRoute(route) {
    return this.findByRouteRecursive(route, this._items);
  }
}
