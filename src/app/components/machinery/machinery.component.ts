import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-machinery',
  imports: [CommonModule],
  templateUrl: './machinery.component.html',
  styleUrl: './machinery.component.scss'
})
export class MachineryComponent {
  equipmentList = [
    "Pulpers",
    "Refiner",
    "TDR (Thru Drying)",
    "Thickener",
    "Chests",
    "Centicleaners",
    "Turbo",
    "Cylinders",
    "Wire Part",
    "Press Part",
    "Dryers",
    "Felts",
    "Wire",
    "Yankee",
    "Calendar",
    "Pope",
    "Rewinder",
    "Transfer",
    "Generators",
    "HT Panels",
    "Coated Plant",
    "Cutters",
  ]

  factoryAreas = [
    "Reception",
    "Conference Room",
    "Personal Department",
    "Human Resource",
    "Production Floor",
    "Finishing Department",
    "Packing",
    "Machine Maintenance Department",
    "Security Room",
    "Accounts",
    "General Stores",
    "Cutting Department",
    "Quality Control",
  ]

  sisterCompanies = [
    { name: "Paramount Paper Board Mills Ltd", location: "Plot No. 99, Phase V, Hattar" },
  ]

  competitors = [
    "Malik Board, Sheikhupura",
    "Fazal Paper Board Mills (pvt) Ltd, Okara",
    "Neelum Paper Board Mills (pvt) Ltd, Hattar",
    "Paramount Paper Board Mills Ltd, Hattar",
    "Zaman Paper Board Mills (pvt) Ltd, Hattar",
  ]

  galleryCategories = [
    { id: 'all', name: 'All Photos' },
    { id: 'machines', name: 'Base Machines' },
    { id: 'coating', name: 'Coating Plant' },
    { id: 'cutting', name: 'Cutting' },
    { id: 'warehouse', name: 'Warehouse' },
    { id: 'facility', name: 'Facility' },
  ]

  activeGallery = 'all'

  galleryImages = [
    { src: 'assets/pm1.jpg', alt: 'Base Machine PM 1', category: 'machines', title: 'Base Machine PM 1' },
    { src: 'assets/pm2.jpg', alt: 'Base Machine PM 2', category: 'machines', title: 'Base Machine PM 2' },
    { src: 'assets/coating1.jpg', alt: 'Coating Plant 1', category: 'coating', title: 'Coating Plant 1' },
    { src: 'assets/coating2.jpg', alt: 'Coating Plant 2', category: 'coating', title: 'Coating Plant 2' },
    { src: 'assets/cutters.jpg', alt: 'Cutters', category: 'cutting', title: 'Cutting Section' },
    { src: 'assets/finish_goods.jpg', alt: 'Finish Goods', category: 'warehouse', title: 'Finish Goods' },
    { src: 'assets/entrance.jpg', alt: 'Entrance', category: 'facility', title: 'Entrance' },
  ]

  get filteredGallery() {
    if (this.activeGallery === 'all') {
      return this.galleryImages;
    }
    return this.galleryImages.filter(img => img.category === this.activeGallery);
  }

  setGalleryCategory(catId: string) {
    this.activeGallery = catId;
  }
}
