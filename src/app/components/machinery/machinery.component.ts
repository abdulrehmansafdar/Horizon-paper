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
    { src: 'assets/base_machine copy.png', alt: 'Base Paper Machine PM 1', category: 'machines', title: 'Base Paper Machine' },
    { src: 'assets/coating_machine_1 copy.png', alt: 'Coating Machine 1', category: 'coating', title: 'Coating Machine 1' },
    { src: 'assets/coating_machine_2 copy.png', alt: 'Coating Machine 2', category: 'coating', title: 'Coating Machine 2' },
    { src: 'assets/coatinf_machine_3 copy.png', alt: 'Coating Machine 3', category: 'coating', title: 'Coating Machine 3' },
    { src: 'assets/clean_cutter copy.png', alt: 'Clean Cutter Machine', category: 'cutting', title: 'Clean Cutter' },
    { src: 'assets/warehouse_machines copy.png', alt: 'Warehouse Machines', category: 'warehouse', title: 'Warehouse Section' },
    { src: 'assets/warehouse_machines_2 copy.png', alt: 'Warehouse Machines 2', category: 'warehouse', title: 'Warehouse Storage' },
    { src: 'assets/warehouse_machines_3 copy.png', alt: 'Warehouse Machines 3', category: 'warehouse', title: 'Warehouse Equipment' },
    { src: 'assets/factory_gate copy.png', alt: 'Factory Entrance Gate', category: 'facility', title: 'Factory Entrance' },
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
