import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { AboutComponent } from './pages/about/about.component';
import { TeamComponent } from './components/team/team.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProductsComponent } from './components/products/products.component';
import { ProcessComponent } from './components/process/process.component';
import { MachineryComponent } from './components/machinery/machinery.component';
import { HeroComponent } from './components/hero/hero.component';

@Component({
  selector: 'app-root',
  imports: [ HeaderComponent, FooterComponent,AboutComponent,TeamComponent,ClientsComponent,ContactComponent,ProductsComponent,ProcessComponent,MachineryComponent,HeroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'HorizonPaper';
}
