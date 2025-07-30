import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Product } from '../../Interfaces/Model';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
products: Product[] = [
  {
    title: "Sheet Coating",
    description: "Premium coated paper sheets with a glossy finish, perfect for vibrant printing and luxury packaging.",
    badges: ["Glossy", "Printable", "Premium", "Packaging"],
    details:
      "Our coated boards offer excellent printability and a smooth surface finish, making them ideal for packaging and high-quality printing applications.",
    gradient: "bg-gradient-to-r from-emerald-600 to-emerald-700",
    icon: "M4 6h16M4 10h16M4 14h16M4 18h16", // icon: horizontal lines (sheet/paper)
  },
  {
    title: "Uncoated Flutier",
    description: "Strong, uncoated fluting medium for corrugated boxes, providing durability and cushioning.",
    badges: ["Corrugated", "Durable", "Eco-friendly", "Fluting"],
    details:
      "Our uncoated flutier is designed for use in corrugated packaging, offering strength and flexibility for protective shipping solutions.",
    gradient: "bg-gradient-to-r from-emerald-600 to-emerald-700",
    icon: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7M5 7V5a2 2 0 012-2h10a2 2 0 012 2v2", // icon: document/board
  },
];
}
