import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Heroe} from '../../Services/heroes.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html',
  styleUrls: ['./heroe-card.component.css']
})
export class HeroeCardComponent implements OnInit {
  @Input() heroe: Heroe;
  @Input() index: number;

  @Output() selectedHeroe: EventEmitter<number>;

  constructor(private router: Router) {
    this.selectedHeroe = new  EventEmitter();
  }

  ngOnInit(): void {
  }

  verHeroe() {
    this.router.navigate(['/heroe', this.index]);
    // this.selectedHeroe.emit(this.index);
  }
}
