import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public conversionForm: FormGroup = new FormGroup({
    binaryNumber: new FormControl(''),
    decimalNumber: new FormControl(''),
  });

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    let binaryNumber: string = this.conversionForm.get('binaryNumber')?.value;
    let decimalNumber: number =
      +this.conversionForm.get('decimalNumber')?.value;

    if (binaryNumber.length > 0) {
      this.conversionForm
        .get('decimalNumber')
        ?.patchValue(this.convertDecimalToBinary(binaryNumber));
    } else {
      this.conversionForm
        .get('binaryNumber')
        ?.patchValue(this.convertBinaryToDecimal(decimalNumber));
    }
  }

  convertBinaryToDecimal(decimalNumber: Number): string {
    return decimalNumber.toString(2);
  }

  convertDecimalToBinary(binaryNumber: string): Number {
    return parseInt(binaryNumber, 2);
  }

  isTypingBinaryNumber(event: any): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (
      (charCode > 31 && (charCode < 48 || charCode > 49)) ||
      charCode === 13
    ) {
      return false;
    }
    return true;
  }

  isTypingDecimalNumber(event: any): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (
      (charCode > 31 && (charCode < 48 || charCode > 57)) ||
      charCode === 13
    ) {
      return false;
    }
    return true;
  }
}
