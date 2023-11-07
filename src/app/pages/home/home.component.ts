import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

interface ItemData {
  gender: string;
  name: Name;
  email: string;
}

interface Name {
  title: string;
  first: string;
  last: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {

  rightItems = [
    { "name": "首页", "icon": "home", "routerUrl": "/home" },
    { "name": "个人中心", "icon": "user", "routerUrl": "/dashboard/personal-center" },
    { "name": "档案", "icon": "file-protect", "routerUrl": "/dashboard" },
    { "name": "系统管理", "icon": "setting", "routerUrl": "/dashboard" },
    { "name": "退出", "icon": "logout", "routerUrl": "/login" },
  ];

  data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.'
  ];

  constructor(private router: Router) { }

  /**
   * 
   * @param item 
   */
  navFun(item: any): void {
    this.router.navigate([item.routerUrl]);
  }

}
