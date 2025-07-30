import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-loader',
  imports: [NgxSpinnerModule],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LoaderComponent {
  constructor(private spinner: NgxSpinnerService) { }
  showSpinner(): void {
    this.spinner.show();
  }
  hideSpinner(): void {
    this.spinner.hide();
  }

}
