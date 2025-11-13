import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
companyName = "Horizon Paper & Board Mills"
  companyType = "(Pvt) Ltd"
  companyDescription = "Leading paper board manufacturer in Pakistan, committed to quality and excellence since 2009."

  quickLinks = [
    { label: "About Us", href: "#about" },
    { label: "Products", href: "#products" },
    { label: "Manufacturing", href: "#process" },
    { label: "Leadership", href: "#team" },
    { label: "Clients", href: "#clients" },
  ]

  companyInfo = [
    "Registration: 0058450",
    "N.T.N: 2845517-7",
    "Established: November 2009",
    "Employees: 300+",
    "Capacity: 300 MT/Day",
  ]

  copyrightText = `© ${new Date().getFullYear()} Horizon Paper & Board Mills (Pvt) Ltd. All rights reserved.`
  disclaimerText = "Demo portfolio website - All data is fictional for demonstration purposes"
}
