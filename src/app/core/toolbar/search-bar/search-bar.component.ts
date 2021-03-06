import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { SidenavItem } from '../../sidenav/sidenav-item/sidenav-item.model';
import { SidenavService } from '../../sidenav/sidenav.service';

@Component({
  selector: 'ms-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  input: string;
  focused: boolean;

  recentlyVisited: SidenavItem[] = [ ];

  constructor(
    private router: Router,
    private sidenavService: SidenavService
  ) { }

  ngOnInit() {
    // Start Demo Data - You can safely remove this
    this.recentlyVisited.push(this.sidenavService.getSidenavItemByRoute('/'));
    // End Demo Data - You can safely remove this

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {

        const item = this.sidenavService.getSidenavItemByRoute(event.urlAfterRedirects);

        const index = this.recentlyVisited.indexOf(item);
        if (index > -1) {
          this.recentlyVisited.splice(index, 1);
        }

        this.recentlyVisited.unshift(item);

        if (this.recentlyVisited.length > 5) {
          this.recentlyVisited.pop();
        }
      }

    });
  }

  openDropdown() {
    this.focused = true;
  }

  closeDropdown() {
    this.focused = false;
  }

}
