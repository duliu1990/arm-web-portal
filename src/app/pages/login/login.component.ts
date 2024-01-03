import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from 'src/app/core/auth/account.service';
import { LoginService } from './login.service';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {

  @ViewChild('username', { static: false })
  username!: ElementRef;

  authenticationError = false;

  loginForm: FormGroup<{
    username: FormControl<string>;
    password: FormControl<string>;
    rememberMe: FormControl<boolean>;
  }> = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
    rememberMe: [true, []]
  });

  constructor(private accountService: AccountService,
    private loginService: LoginService, private router: Router,
    private fb: NonNullableFormBuilder,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef) {

  }

  /**
   * 
   */
  ngOnInit(): void {
    if (this.route.snapshot.queryParams['type'] == 'logout')
      this.loginService.logout();
    // if already authenticated then navigate to home page
    this.accountService.identity().subscribe(() => {
      if (this.accountService.isAuthenticated()) {
        this.router.navigate(['/home']);
      }
    });
  }

  /**
   * 
   */
  ngAfterViewInit(): void {
    this.username.nativeElement.focus();
    this.cdr.detectChanges();
  }

  /**
   * Login method
   */
  login(): void {
    if (this.loginForm.valid) {
      this.loginService.login(this.loginForm.getRawValue()).subscribe({
        next: () => {
          this.authenticationError = false;
          if (!this.router.getCurrentNavigation()) {
            // There were no routing during login (eg from navigationToStoredUrl)
            this.router.navigate(['/home']);
          }
        },
        error: () => (this.authenticationError = true),
      });
    } else {
      Object.values(this.loginForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }

  }

}
