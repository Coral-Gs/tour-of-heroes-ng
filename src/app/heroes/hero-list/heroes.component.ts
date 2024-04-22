import { Component, OnInit } from '@angular/core';

import { Hero } from '../../interfaces/hero.interface';
import { HeroService } from '../../services/hero.service';
import { MessageService } from '../../services/messages.service';

@Component({
  selector: 'heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  public heroes: Hero[] = [];
  public selectedHero?: Hero;

  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    //Me suscribo al observable que devuelve heroService.getHeroes()
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }

  onSelectHero(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService.addHero({ name } as Hero).subscribe((hero) => {
      this.heroes.push(hero);
    });
    this.messageService.add(`HeroesComponent: Added new hero`);
  }

  deleteHero(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }
}
