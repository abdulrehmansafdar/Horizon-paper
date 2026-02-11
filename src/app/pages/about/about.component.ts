import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  ngOnInit() {
    AOS.init({
      once: true, // Animation runs only once per scroll
    });
  }

  vision = 
  'To be a trusted leader in the paper and packaging industry, delivering value, innovation, and sustainability to our customers, employees, and society.';

mission = 
  'To consistently provide high-quality paper, board, and packaging solutions through innovation, customer focus, and a culture of excellence.';

  companyInfo = [
    {
      title: 'Registration Details',
      items: [
        'Registration No: 0058450',
        'N.T.N: 2845517-7',
        'S.Tax Reg. No: 07-01-4810-004-64',
        'Borrower Code: 1017501',
      ],
    },
    // {
    //   title: "Financial Information",
    //   items: ["Authorized Capital: Rs. 50 Million", "Paid-up Capital: Rs. 50 Million", "Shares: 500,000 @ Rs. 100/-"],
    // },
    {
      title: 'Operations',
      items: [
        'Production Started: November 2009',
        'Principal Activity: Paper Board Manufacturing',
        'Market: Local & International',
        // "Production Capacity: 300 MT/Day",
      ],
    },
  ];
}
