import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Product {
  title: string;
  description: string;
  category: string;
  specs: string[];
  applications: string[];
  image?: string;
}

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  activeCategory = 'all';

  categories = [
    { id: 'all', name: 'All Products' },
    { id: 'coated', name: 'Coated Board' },
    { id: 'uncoated', name: 'Uncoated Board' },
    { id: 'specialty', name: 'Specialty' },
    { id: 'eggtrays', name: 'Egg Trays' },
  ];

  products: Product[] = [
    {
      title: 'Coated Duplex Board',
      description: 'Premium quality coated board with excellent printability and smooth finish for high-end packaging.',
      category: 'coated',
      specs: ['200-400 GSM', 'Brightness 85%+', 'Gloss Finish'],
      applications: ['Pharmaceutical', 'Cosmetics', 'Food Packaging', 'Luxury Boxes'],
    },
    {
      title: 'Coated Chrome Board',
      description: 'High gloss coated board suitable for premium printing and packaging applications.',
      category: 'coated',
      specs: ['250-450 GSM', 'High Gloss', 'Excellent Ink Holdout'],
      applications: ['Cigarettes', 'Beverages', 'Confectionery', 'Promotional'],
    },
    {
      title: 'Folding Box Board',
      description: 'Economical coated board perfect for folding cartons and general packaging.',
      category: 'coated',
      specs: ['180-350 GSM', 'Good Foldability', 'Print Ready'],
      applications: ['Retail Packaging', 'Electronics', 'Textiles', 'General Goods'],
    },
    {
      title: 'Uncoated Duplex Board',
      description: 'Premium uncoated board with excellent stiffness and bulk for industrial applications.',
      category: 'uncoated',
      specs: ['200-400 GSM', 'High Stiffness', 'Natural Finish'],
      applications: ['Corrugation', 'Industrial Rolls', 'Book Binding', 'File Cards'],
    },
    {
      title: 'White Back Duplex',
      description: 'Double-sided board with white back for printing on both sides.',
      category: 'uncoated',
      specs: ['200-350 GSM', 'Both Sides Printable', 'High Bulk'],
      applications: ['Menu Cards', 'Posters', 'Book Covers', 'Directories'],
    },
    {
      title: 'Kraft Liner Board',
      description: 'Strong kraft liner for corrugated packaging and industrial use.',
      category: 'specialty',
      specs: ['150-300 GSM', 'High Tear Resistance', 'Recyclable'],
      applications: ['Corrugated Boxes', 'Industrial Packaging', 'Export Packing'],
    },
    {
      title: 'Egg Trays',
      description: 'Eco-friendly molded pulp egg trays designed for safe storage and transport of eggs with excellent cushioning protection.',
      category: 'eggtrays',
      specs: ['30-Cell Standard', 'Recyclable Pulp', 'Moisture Resistant'],
      applications: ['Poultry Farms', 'Egg Distribution', 'Supermarkets', 'Export Packaging'],
      image: 'assets/eggtray.jpeg',
    },
  ];

  get filteredProducts(): Product[] {
    if (this.activeCategory === 'all') {
      return this.products;
    }
    return this.products.filter(p => p.category === this.activeCategory);
  }

  ScrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
