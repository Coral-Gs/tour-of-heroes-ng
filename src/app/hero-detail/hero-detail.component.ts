import { Component, Input } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';
import { FormsModule } from '@angular/forms';
import { NgIf, UpperCasePipe } from '@angular/common';
import { PrimengModule } from '../primeng/primeng.module';

@Component({
  standalone: true,
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css',
  imports: [
    FormsModule,
    NgIf,
    UpperCasePipe,
    PrimengModule,
    HeroDetailComponent
  ],
})
export class HeroDetailComponent {

  @Input()
  public hero?: Hero;

}
