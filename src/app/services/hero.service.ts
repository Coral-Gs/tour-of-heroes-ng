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
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
}
