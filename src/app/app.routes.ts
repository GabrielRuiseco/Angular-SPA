import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './Components/home/home.component';
import {AboutComponent} from './Components/about/about.component';
import {HeroesComponent} from './Components/heroes/heroes.component';
import {HeroeComponent} from './Components/heroe/heroe.component';

const APP_ROUTES: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'heroes', component: HeroesComponent},
  {path: 'heroe/:id', component: HeroeComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
