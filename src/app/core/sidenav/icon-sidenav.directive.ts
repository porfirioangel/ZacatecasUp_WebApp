import {Directive, HostBinding, HostListener, OnDestroy, OnInit} from '@angular/core';
import {SidenavService} from "./sidenav.service";
import {SidenavItem} from "./sidenav-item/sidenav-item.model";
import {MediaChange} from "@angular/flex-layout";
import {Subscription} from "rxjs";
import {MediaReplayService} from "./mediareplay/media-replay.service";

@Directive({
  selector: '[msIconSidenav]'
})
export class IconSidenavDirective implements OnInit, OnDestroy {

  isMobile: boolean = false;
  @HostBinding('class.collapsed')
  collapsed: boolean;
  currentlyOpen: SidenavItem[];
  private _mediaSubscription: Subscription;

  constructor(private sidenavService: SidenavService,
              private mediaReplayService: MediaReplayService) {
  }

  @HostBinding('class.icon-sidenav')
  get isIconSidenav(): boolean {
    return this.sidenavService.isIconSidenav;
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    if (this.isIconSidenav && !this.isMobile) {
      this.collapsed = false;

      this.sidenavService.nextCurrentlyOpen(this.currentlyOpen);
    }
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    if (this.isIconSidenav && !this.isMobile) {
      this.collapsed = true;

      this.currentlyOpen = this.sidenavService.currentlyOpen;
      this.sidenavService.nextCurrentlyOpen([]);
    }
  }

  ngOnInit() {
    this._mediaSubscription = this.mediaReplayService.media$.subscribe((change: MediaChange) => {
      this.isMobile = (change.mqAlias == 'xs') || (change.mqAlias == 'sm');
    });
  }

  ngOnDestroy() {
    if (this._mediaSubscription) {
      this._mediaSubscription.unsubscribe();
    }

  }
}
