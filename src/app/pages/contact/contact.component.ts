import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactForm } from '../../Interfaces/Model';


@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  isSubmitting = false

  contactForm: ContactForm = {
    name: "",
    email: "",
    message: "",
  }

  headOffice = {
    address1: "Suite # 402, 4th Floor",
    address2: "Doussal Arcade, Blue Area, Islamabad",
    phone: "051-2604648-50",
    email: "horizon.imports110@yahoo.com",
  }

  factory = {
    address1: "Plot # 152 Phase V",
    address2: "Industrial Area, Hattar",
    phone: "0995-617945-46",
    capacity: "300 Metric Tons per day",
  }

  onSubmit() {
    if (this.contactForm.name && this.contactForm.email && this.contactForm.message) {
      this.isSubmitting = true

      // Simulate form submission
      setTimeout(() => {
        console.log("Form submitted:", this.contactForm)
        alert("Thank you for your inquiry! We will get back to you soon.")

        // Reset form
        this.contactForm = {
          name: "",
          email: "",
          message: "",
        }

        this.isSubmitting = false
      }, 1000)
    }
  }
}
