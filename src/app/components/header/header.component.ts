import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule,RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
isMobileMenuOpen = false

  navItems = [
    { label: "About", href: "#about" },
    { label: "Products", href: "#products" },
    { label: "Process", href: "#process" },
    { label: "Team", href: "#team" },
    { label: "Clients", href: "#clients" },
    { label: "Contact", href: "#contact" },
  ]

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false
  }
}
