import { Component } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';
import { Heroes } from '../mock-heroes';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { PrimengModule } from '../primeng/primeng.module';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';

@Component({
  standalone: true,
  selector: 'heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  imports: [
    FormsModule,
    NgIf,
    NgFor,
    UpperCasePipe,
    PrimengModule,
    HeroDetailComponent
  ],
})
export class HeroesComponent {

  public heroList: Hero[] = Heroes;
  public selectedHero?: Hero;
  
  onSelectHero(hero: Hero):void {
    this.selectedHero = hero;

  }

}
