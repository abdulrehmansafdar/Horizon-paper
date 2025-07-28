import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
 stats = [
    { value: '300', label: 'MT/Day Capacity' },
    { value: '15+', label: 'Years Experience' },
    { value: '300+', label: 'Employees' },
    { value: '100%', label: 'Local Market' }
  ];
}
