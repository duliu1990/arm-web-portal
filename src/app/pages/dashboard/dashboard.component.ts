import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderMenu, Menu } from 'src/app/core/request/menu.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  isCollapsed = false;

  header_menu: HeaderMenu[] = []

  left_menu: Menu[] = [];

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient, private location: Location) { }

  ngOnInit() {

    this.loadMenu();

    this.http.get<any>('/assets/data/head-menu.json').subscribe(el => {
      this.header_menu = el;
    });
  }

  /**
   * 
   * @param item 
   */
  navFun(item: any): void {
    this.router.navigate([item.routerUrl]);

    this.loadMenu(item.routerUrl);
  }

  /**
   * load the right menu with path
   */
  loadMenu(path?: string): void {
    let reqPath;

    if (path)
      reqPath = path;
    else
      reqPath = this.location.path();

    if (reqPath.startsWith('/dashboard/sys-manager')) {
      this.http.get<any>('/assets/data/sys-config-menu.json').subscribe(el => {
        this.left_menu = el;
      });
    } else if (reqPath.startsWith('/dashboard/personal-center')) {
      this.http.get<any>('/assets/data/personal-menu.json').subscribe(el => {
        this.left_menu = el;
      });
    }
  }

}
