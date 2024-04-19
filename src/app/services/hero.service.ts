import { Injectable } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';
import { Heroes } from '../mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  public heroList: Hero[] = Heroes;

  constructor() { }

  getHeroes(): Hero[] {
    return this.heroList;
  }
}
