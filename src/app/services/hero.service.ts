import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from '../domain/hero.interface';
import { HEROES } from '../mocks/heroes.mock';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() {
  }

  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }
}
