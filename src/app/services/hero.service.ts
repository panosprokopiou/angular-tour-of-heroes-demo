import { Injectable } from '@angular/core';

import { Hero } from '../domain/hero.interface';
import { HEROES } from '../mocks/heroes.mock';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Hero[] {
    return HEROES;
  }
}
