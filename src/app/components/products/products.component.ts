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
      title: "Coated Board",
      description: "Premium quality coated paper boards with superior finish",
      badges: ["White Eagle", "Cheeta", "Bike Polo", "HP Brown", "Awami"],
      details:
        "Our coated boards offer excellent printability and smooth surface finish, ideal for packaging and printing applications.",
      gradient: "bg-gradient-to-r from-emerald-600 to-emerald-700",
      icon: "M9 12l2 2 4-4m5-7a2 2 0 11-4 0 2 2 0 014 0zM15 12a3 3 0 11-6 0 3 3 0 016 0z",
    },
    {
      title: "Uncoated Board",
      description: "High-strength uncoated paper boards for various applications",
      badges: ["White Horse", "Super Elephant", "Eagle", "File Card"],
      details:
        "Our uncoated boards provide excellent strength and durability, perfect for industrial packaging and file applications.",
      gradient: "bg-gradient-to-r from-slate-600 to-slate-700",
      icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
    },
  ];
}
