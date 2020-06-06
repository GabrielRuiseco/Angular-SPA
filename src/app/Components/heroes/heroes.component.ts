import {Component, OnInit} from '@angular/core';
import {HeroesService, Heroe} from '../../Services/heroes.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor(private heroesService: HeroesService,
              private router: Router) {
    console.log('constructor');
  }

  ngOnInit(): void {
    this.heroes = this.heroesService.getHeroes();
    console.log('ngOnInit');
    console.log(this.heroes);
  }

  verHeroe(idx: number) {
    this.router.navigate(['/heroe', idx]);
    console.log(idx);
  }

}
