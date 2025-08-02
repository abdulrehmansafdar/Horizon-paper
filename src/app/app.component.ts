import { Component, OnInit,PLATFORM_ID,Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
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
import { LoaderComponent } from "./components/loader/loader.component";
import { LoaderService } from './services/loader.service';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, AboutComponent, TeamComponent, ClientsComponent, ContactComponent, ProductsComponent, ProcessComponent, MachineryComponent, HeroComponent, LoaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'HorizonPaper';
  ngOnInit(): void {
      
  }
  constructor(private loader:LoaderService,
              @Inject(PLATFORM_ID) private platformId: Object
  )
  {

    if(isPlatformBrowser(this.platformId)) {
      this.loader.show();
      window.addEventListener('load', () => {
        setTimeout(() => {
          this.loader.hide();
        }, 500); // Adjust the delay as needed
    });
  }

  }
  
}
