import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
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
    { label: "About", href: "about" },
    { label: "Products", href: "products" },
    { label: "Process", href: "process" },
    { label: "Team", href: "team" },
    { label: "Clients", href: "clients" },
    { label: "Contact", href: "contact" },
  ]

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    // Prevent body scroll when menu is open
    document.body.style.overflow = this.isMobileMenuOpen ? 'hidden' : '';
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
    document.body.style.overflow = '';
  }

  @HostListener('window:keydown.escape', ['$event'])
  handleEscapeKey(event: Event) {
    const keyboardEvent = event as KeyboardEvent;
    if (this.isMobileMenuOpen) {
      this.closeMobileMenu();
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (window.innerWidth >= 1024 && this.isMobileMenuOpen) {
      this.closeMobileMenu();
    }
  }

  ScrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      // Add smooth animation delay
      this.closeMobileMenu();
      setTimeout(() => {
        section.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  }
}
