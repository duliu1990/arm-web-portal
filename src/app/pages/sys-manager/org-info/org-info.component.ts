import { Component } from '@angular/core';
import { FormGroup, FormControl, NonNullableFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-org-info',
  templateUrl: './org-info.component.html',
  styleUrls: ['./org-info.component.scss']
})
export class OrgInfoComponent {
  validateForm: FormGroup<{
    orgName: FormControl<string>;
    orgCode: FormControl<string>;
    contactName: FormControl<string>;
    phoneNumberPrefix: FormControl<'+86'>;
    phoneNumber: FormControl<string>;
    orgAddress: FormControl<string>;
  }>;

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  constructor(private fb: NonNullableFormBuilder) {
    this.validateForm = this.fb.group({
      orgName: ['', [Validators.required]],
      orgCode: ['', [Validators.required]],
      contactName: ['', [Validators.required]],
      phoneNumberPrefix: '+86' as '+86',
      phoneNumber: ['', [Validators.required]],
      orgAddress: ['', [Validators.required]],
    });
  }
}
