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
    { "name": "系统管理", "icon": "setting", "routerUrl": "/dashboard/sys-manager" },
    { "name": "退出", "icon": "logout", "routerUrl": "/login" },
  ];

  left_menu = [];

  sys_menuItems = [
    { "name": "单位信息", "icon": "bank", "routerUrl": "/home" },
    { "name": "全宗管理", "icon": "bank", "routerUrl": "/home" },
    { "name": "文件类型", "icon": "user", "routerUrl": "/dashboard/personal-center" },
    { "name": "档案门类", "icon": "file-protect", "routerUrl": "/dashboard" },
    { "name": "数据字典", "icon": "setting", "routerUrl": "/dashboard" },
    { "name": "数据项", "icon": "logout", "routerUrl": "/login" },
    { "name": "档案格式", "icon": "logout", "routerUrl": "/login" },
    { "name": "实体分类", "icon": "logout", "routerUrl": "/login" },
    { "name": "归档设置", "icon": "logout", "routerUrl": "/login" },
    { "name": "原文存储", "icon": "logout", "routerUrl": "/login" },
    { "name": "图像水印", "icon": "logout", "routerUrl": "/login",
    "sub_menus": [
      { "name": "水印方案", "routerUrl": "/x" },
      { "name": "水印设置", "routerUrl": "/dashboard/sys-manager" },
    ] },
    { "name": "档号章设置", "icon": "logout", "routerUrl": "/login" },
    { "name": "OCR管理", "icon": "logout", "routerUrl": "/login" },
    { "name": "审批流程", "icon": "logout", "routerUrl": "/login" },
    { "name": "系统公告", "icon": "logout", "routerUrl": "/login" }
  ];

  user_menuItems = [
    { "name": "我的消息", "icon": "mail", "routerUrl": "/home" },
    { "name": "系统公告", "icon": "message", "routerUrl": "/home" },
    {
      "name": "我的借阅", "icon": "database", "routerUrl": "/dashboard/personal-center",
      "sub_menus": [
        { "name": "实物借阅", "routerUrl": "/x" },
        { "name": "电子借阅", "routerUrl": "/dashboard/sys-manager" },
        { "name": "借阅登记", "routerUrl": "/dashboard/sys-manager" }
      ]
    },
    { "name": "我的审批", "icon": "file-text", "routerUrl": "/dashboard" },
    { "name": "我的编研", "icon": "inbox", "routerUrl": "/dashboard" },
    {
      "name": "我的资料", "icon": "user", "routerUrl": "/login",
      "sub_menus": [
        { "name": "个人信息", "routerUrl": "/x" },
        { "name": "修改密码", "routerUrl": "/dashboard/sys-manager" }
      ]
    },
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
