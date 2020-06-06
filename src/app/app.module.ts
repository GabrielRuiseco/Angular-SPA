import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

// Routes
import {APP_ROUTING} from './app.routes';

// Services
import {HeroesService} from './Services/heroes.service';

// Components
import {AppComponent} from './app.component';
import {NavbarComponent} from './Components/MasterComponents/navbar/navbar.component';
import {HomeComponent} from './Components/home/home.component';
import {AboutComponent} from './Components/about/about.component';
import {HeroesComponent} from './Components/heroes/heroes.component';
import { HeroeComponent } from './Components/heroe/heroe.component';
import { HeroeCardComponent } from './Components/heroe-card/heroe-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    HeroeCardComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
