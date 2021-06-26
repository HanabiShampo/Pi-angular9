import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AjoutEquipeComponent } from './ajout-equipe/ajout-equipe.component';
import { HttpClientModule } from '@angular/common/http';
import { EquipeComponent } from './equipe/equipe.component';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import { TableModule } from 'primeng/table';            
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    AjoutEquipeComponent,
    EquipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AccordionModule,
    TableModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
