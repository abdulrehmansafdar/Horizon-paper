import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Tab, Supplier } from '../../Interfaces/Model';

@Component({
  selector: 'app-clients',
  imports: [CommonModule],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss',
})
export class ClientsComponent {
  activeTab = 'clients';

  tabs: Tab[] = [
    { id: 'clients', label: 'Valued Clients' },
    { id: 'suppliers', label: 'Suppliers' },
    { id: 'banks', label: 'Banking Partners' },
  ];

  clients = [
    'A J Match Factory, Sheikhupura',
    'Mohsin Match Factory, Peshawar',
    'Alam Match Factory, Peshawar',
    'Khyber Match Factory',
    // 'Popular Match Factory',
    'Dawn Paper Mart, Karachi',
    'Kashif Impex, Lahore',
    // 'Bao Brothers',
    'Al Aziz Packages',
    'Khurshid Impex',
    'Artotec (pvt) Ltd',
    'Modern Paper Mart, Lahore',
    'M. N. Paper Mart, Karachi',
    'A H Paper, Lahore',
    // 'Pakistan International Printing',
    // 'Royal Paper Mart, Rawalpindi',
    // 'Malik Paper Trader, Rawalpindi',
    // 'Malik Paper Mart, Rawalpindi',
  ];

  internationalSuppliers: Supplier[] = [
    // { name: 'Hansol Chemical Co. Ltd', location: 'Korea - Import' },
    // { name: 'BASF South East Asia Pte Ltd', location: 'Singapore - Import' },

    { name: 'Thiele Kaolin Company', location: 'Korea - Import' },
    { name: 'Hansol Chemical Co.Ltd', location: 'Korea - Import' },
    { name: 'Nantex Industry Co.Ltd', location: 'Korea - Import' },
    { name: 'Saj International Trading Pte Ltd', location: 'Korea - Import' },
    { name: 'Valtec Engineering Ltd', location: 'Korea - Import' },
    { name: 'Alliance International DWC-LLC', location: 'Korea - Import' },
    // { name: 'Saj International Trading Pte Ltd', location: 'Korea - Import' },
    {
      name: 'GLOBAL LEYI NEW MATERIALS TECHNOLOGY  (NINGBO) CO.,LTD.',
      location: 'Korea - Import',
    },
    { name: 'BASF Pakistan (Pvt) Limited', location: 'Korea - Import' },
    { name: 'Buckman Laboratories (Asia) Pvt Ltd', location: 'Korea - Import' },
  ];

  localSuppliers = [
    'Archroma Pakistan',
    'Sitara Chemical',
    'Rafhan',
    'Nimir',
  ];

  banks = [
    'Bank Al Habib',
    'Bank Alfalah Ltd',
    'Meezan Bank',
    'Karandaz',
    'Parwaaz Financial Services Limited',
    // 'UBL F/7 Markaz Branch, Islamabad',
    // 'BOK Blue Area Branch, Islamabad',
    // 'BOP Blue Area Branch, Islamabad',
  ];
}
