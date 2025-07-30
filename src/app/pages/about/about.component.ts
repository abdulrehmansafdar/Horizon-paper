import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  vision =
    "To be the market leader and an enduring force in the paper, paper board, positively influencing and providing value to our stakeholders, society and our nation."

  mission =
    "To strive incessantly for excellence and sustain our position as a preferred supplier of quality paper, board and packaging material within a team environment and with a customer focused strategy."

  companyInfo = [
    {
      title: "Registration Details",
      items: [
        "Registration No: 0058450",
        "N.T.N: 2845517-7",
        "S.Tax Reg. No: 07-01-4810-004-64",
        "Borrower Code: 1017501",
      ],
    },
    // {
    //   title: "Financial Information",
    //   items: ["Authorized Capital: Rs. 50 Million", "Paid-up Capital: Rs. 50 Million", "Shares: 500,000 @ Rs. 100/-"],
    // },
    {
      title: "Operations",
      items: [
        "Production Started: November 2009",
        "Principal Activity: Paper Board Manufacturing",
        "Market: 100% Local",
        // "Production Capacity: 300 MT/Day",
      ],
    },
  ]
}
