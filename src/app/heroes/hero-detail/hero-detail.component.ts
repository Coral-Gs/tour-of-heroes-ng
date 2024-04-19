import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { HeroService } from '../../services/hero.service';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css',
})
export class HeroDetailComponent implements OnInit {

  public hero?: Hero;

  constructor (
    private route: ActivatedRoute,
    private heroService: HeroService,
  ){}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id).subscribe(hero => this.hero = hero);
  }




}
