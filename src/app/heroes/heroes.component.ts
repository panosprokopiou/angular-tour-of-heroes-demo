import { Component, OnInit } from '@angular/core';
import { Hero } from '../domain/hero.interface';
import { HEROES } from '../mocks/heroes.mock';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes = HEROES;
  selectedHero?: Hero;

  constructor() {
  }

  ngOnInit() {
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

  isSelected(hero: Hero) {
    if (this.selectedHero && hero) {
      return hero.id === this.selectedHero.id;
    }
  }

}
