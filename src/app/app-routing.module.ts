import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/hero-list/heroes.component';
import { DashboardComponent } from './heroes/dashboard/dashboard.component';
import { HeroDetailComponent } from './heroes/hero-detail/hero-detail.component';
import { NavComponent } from './shared/components/nav/nav.component';

const routes: Routes = [

  {path: '', component: NavComponent}, 
  {
    path: 'heroes', component: HeroesComponent
  },
  {
    path: 'dashboard', component: DashboardComponent
  },
  {
    path: 'detail/:id', component: HeroDetailComponent
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
