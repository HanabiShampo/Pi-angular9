import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AjoutEquipeComponent } from './ajout-equipe/ajout-equipe.component';
import { HttpClientModule } from '@angular/common/http';
import { EquipeComponent } from './equipe/equipe.component';
import {AccordionModule} from 'primeng/accordion';
import { TableModule } from 'primeng/table';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { ListUserComponent } from './list-user/list-user.component';
import { AjoutUComponent } from './ajout-u/ajout-u.component';
import { DeleteUComponent } from './delete-u/delete-u.component';
import { UpdateUComponent } from './update-u/update-u.component';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    AjoutEquipeComponent,
    EquipeComponent,
    ListUserComponent,
    AjoutUComponent,
    DeleteUComponent,
    UpdateUComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
