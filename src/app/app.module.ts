import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AjoutEquipeComponent } from './ajout-equipe/ajout-equipe.component';
import { HttpClientModule } from '@angular/common/http';
import { EquipeComponent } from './equipe/equipe.component';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import { TableModule } from 'primeng/table';            
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateEquipeComponent } from './update-equipe/update-equipe.component';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { EquipeFilterPipe } from './equipe/equipe-filter.pipe';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { MatchComponent } from './match/match.component';
import { UpdatematchComponent } from './updatematch/updatematch.component';
import { AjoutematchComponent } from './ajoutematch/ajoutematch.component';
import { StatMatchComponent } from './stat-match/stat-match.component';
import {ChartModule} from 'primeng/chart';
import { SearchbyresComponent } from './searchbyres/searchbyres.component';
import { UsermatchComponent } from './usermatch/usermatch.component';

const ROUTES: Routes = [
 
  { path: 'getEquipe', component: EquipeComponent },
  { path: 'updateEquipe/:id', component: UpdateEquipeComponent },
{ path: 'getmatch', component: MatchComponent },
{ path: 'updatematch/:id', component: UpdatematchComponent },
{ path: 'searchbyres/:res', component: SearchbyresComponent },
{ path: 'stat', component: StatMatchComponent },
{ path: 'match', component: UsermatchComponent },


];
@NgModule({
  declarations: [
    AppComponent,
    AjoutEquipeComponent,
    EquipeComponent,
    UpdateEquipeComponent,
    AdminComponent,
    EquipeFilterPipe,
    MatchComponent,
    UpdatematchComponent,
    AjoutematchComponent,
    StatMatchComponent,
    SearchbyresComponent,
    UsermatchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AccordionModule,
    TableModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
    CardModule,
    DialogModule ,
    BrowserAnimationsModule,
    ButtonModule,
    ReactiveFormsModule,
    ChartModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
