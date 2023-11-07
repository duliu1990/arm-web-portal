import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  isCollapsed = false;

  rightItems = [
    { "name": "首页", "icon": "home", "routerUrl": "/home" },
    { "name": "个人中心", "icon": "user", "routerUrl": "/dashboard/personal-center" },
    { "name": "档案", "icon": "file-protect", "routerUrl": "/dashboard" },
    { "name": "系统管理", "icon": "setting", "routerUrl": "/dashboard" },
    { "name": "退出", "icon": "logout", "routerUrl": "/login" },
  ];


  constructor(private router: Router) { }

  ngOnInit() {

  }

  /**
   * 
   * @param item 
   */
  navFun(item: any): void {
    this.router.navigate([item.routerUrl]);
  }

}
