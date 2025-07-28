import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Tab, Supplier } from '../../Interfaces/Model';

@Component({
  selector: 'app-clients',
  imports: [CommonModule],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss'
})
export class ClientsComponent {
   activeTab = "clients"

  tabs: Tab[] = [
    { id: "clients", label: "Valued Clients" },
    { id: "suppliers", label: "Suppliers" },
    { id: "banks", label: "Banking Partners" },
  ]

  clients = [
    "A J Match Factory, Sheikhupura",
    "Mohsin Match Factory, Peshawar",
    "Alam Match Factory, Peshawar",
    "Khyber Match Factory",
    "Popular Match Factory",
    "Dawn Paper Mart, Karachi",
    "Kashif Impex, Lahore",
    "Bao Brothers",
    "Al Aziz Packages",
    "Khurshid Impex",
    "Artotec (pvt) Ltd",
    "Modern Paper Mart, Lahore",
    "M. N. Paper Mart, Karachi",
    "A H Paper, Lahore",
    "Pakistan International Printing",
    "Royal Paper Mart, Rawalpindi",
    "Malik Paper Trader, Rawalpindi",
    "Malik Paper Mart, Rawalpindi",
  ]

  internationalSuppliers: Supplier[] = [
    { name: "Hansol Chemical Co. Ltd", location: "Korea - Import" },
    { name: "BASF South East Asia Pte Ltd", location: "Singapore - Import" },
  ]

  localSuppliers = [
    "Ideal Chemicals (pvt) Ltd",
    "Sitara Chemical (pvt) Ltd",
    "Waseem Trader – Waste Supplier",
    "Jutt Trader – Waste Supplier",
    "Ali Baba Enterprise – Waste Supplier",
  ]

  banks = [
    "Bank Al Falah, F/7 Markaz Branch, Islamabad",
    "Bank Al Habib, Industrial Area Branch, Hattar",
    "Silk Bank, Razia Sharif Plaza, Blue Area, Islamabad",
    "Meezan Bank, F/7 Markaz Branch, Islamabad",
    "HBL Main Branch, Blue Area, Islamabad",
    "UBL F/7 Markaz Branch, Islamabad",
    "BOK Blue Area Branch, Islamabad",
    "BOP Blue Area Branch, Islamabad",
  ]
}
