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
    { name: "Paramount Paper Board Mills (pvt) Ltd", location: "Plot No. 99, Phase V, Hattar" },
    { name: "A A Paper (pvt) Ltd", location: "5 KM, Sheikhupura Road, Sheikhupura" },
  ]

  competitors = [
    "Malik Board, Sheikhupura",
    "Fazal Paper Board Mills (pvt) Ltd, Okara",
    "Neelum Paper Board Mills (pvt) Ltd, Hattar",
    "Paramount Paper Board Mills (pvt) Ltd, Hattar",
    "Zaman Paper Board Mills (pvt) Ltd, Hattar",
  ]
}
