import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  userName?: string;
  password?: string;

  passwordVisible = false;

  constructor(private router: Router) {

  }


  login(): void {
      this.router.navigate(['/home']);
  }

}
