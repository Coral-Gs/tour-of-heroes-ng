import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Hero } from '../interfaces/hero.interface';
import { Heroes } from '../mock-heroes';
import { MessageService } from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private messageService:MessageService
  ) {}

  getHeroes(): Observable<Hero[]> {
    const heroes = of(Heroes); //of() devuelve un observable<Hero[]> que emite un único valor Hero[]
    return heroes;
  }

  getHero(id: number): Observable<Hero>{
    const hero = Heroes.find(h => h.id === id)!;
    console.log('Hello from hero service getHero!')
    return of(hero);
  }
}
