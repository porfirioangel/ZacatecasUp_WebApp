import {Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {Subscription} from "rxjs";
import {MediaChange} from "@angular/flex-layout";
import {NavigationEnd, Router} from "@angular/router";
import {MediaReplayService} from "../sidenav/mediareplay/media-replay.service";

@Component({
  selector: 'ms-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AdminComponent implements OnInit, OnDestroy {

  @ViewChild('sidenav') sidenav;
  quickpanelOpen: boolean = false;
  sidenavOpen: boolean = true;
  sidenavMode: string = 'side';
  isMobile: boolean = false;
  buyNowToolbarVisible = true;
  private _mediaSubscription: Subscription;
  private _routerEventsSubscription: Subscription;

  constructor(private router: Router,
              private mediaReplayService: MediaReplayService) {
  }

  ngOnInit() {
    this._mediaSubscription = this.mediaReplayService.media$.subscribe((change: MediaChange) => {
      let isMobile = (change.mqAlias == 'xs') || (change.mqAlias == 'sm');

      this.isMobile = isMobile;
      this.sidenavMode = (isMobile) ? 'over' : 'side';
      this.sidenavOpen = !isMobile;
    });

    this._routerEventsSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd && this.isMobile) {
        this.sidenav.close();
      }
    });

    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 2000);
  }

  ngOnDestroy() {
    if (this._mediaSubscription) {
      this._mediaSubscription.unsubscribe();
    }

  }

  onActivate(e, scrollContainer) {
    scrollContainer.scrollTop = 0;
  }
}
