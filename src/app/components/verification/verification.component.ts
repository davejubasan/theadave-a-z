import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { code } from '../../../code';

@Component({
  selector: 'app-verification',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './verification.component.html',
})
export class VerificationComponent {
  code: string = '';
  isValid: boolean = false;
  hasError: boolean = false;
  errorMessage: string = 'Invalid code.';

  submitCode(): void {
    if (this.code.trim() === code) {
      this.isValid = true;
    } else {
      this.isValid = false;
      this.hasError = true;
    }
  }
}
