import { NgModule } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [],
  exports: [
    InputTextModule,
    ButtonModule ,
    BrowserModule,
  ],
  imports: [ 
  ]
})
export class PrimengModule { }
