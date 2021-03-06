import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HeroesService, Heroe} from '../../Services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe: Heroe;

  constructor(private activatedRoute: ActivatedRoute,
              private heroeService: HeroesService) {

    this.activatedRoute.params.subscribe(params => {
      console.log(params.id);
      this.heroe = this.heroeService.getHeroe(params.id);
      console.log(this.heroe);
    });
  }

  ngOnInit(): void {
  }

}
