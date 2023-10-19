import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  isCollapsed = false;

  constructor(private router: Router) { }

  ngOnInit() {

  }

  /**
   * 
   */
  personalCenter(): void {
    this.router.navigate(['/dashboard/personal-center']);
  }

  /**
   * 
   */
  logout(): void {
    this.router.navigate(['/login']);
  }

}
