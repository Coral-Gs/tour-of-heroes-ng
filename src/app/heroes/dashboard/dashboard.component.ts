import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../services/hero.service';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{

  public heroes: Hero[] = [];
  constructor(public heroService: HeroService){}

  ngOnInit(): void {
    this.getHeroes();
    }

  getHeroes():void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes.slice(1,5))
  }

  

}
