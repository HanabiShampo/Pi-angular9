import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {PlanningService} from "./service/planning.service";
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';

import {ListTestComponent} from './PlanningTest/list-test/list-test.component';
import { CreateTestComponent } from './PlanningTest/create-test/create-test.component';
import { EditTestComponent } from './PlanningTest/edit-test/edit-test.component';
import { ListMatchComponent } from './PlanningMatch/list-match/list-match.component';
import { CreateMatchComponent } from './PlanningMatch/create-match/create-match.component';
import { EditMatchComponent } from './PlanningMatch/edit-match/edit-match.component';
import { ListEntrainementComponent } from './PlanningEntrainement/list-entrainement/list-entrainement.component';
import { CreateEntrainementComponent } from './PlanningEntrainement/create-entrainement/create-entrainement.component';
import { EditEntrainementComponent } from './PlanningEntrainement/edit-entrainement/edit-entrainement.component';


@NgModule({
  declarations: [
    AppComponent,
    ListTestComponent,
    CreateTestComponent,
    EditTestComponent,
    ListMatchComponent,
    CreateMatchComponent,
    EditMatchComponent,
    ListEntrainementComponent,
    CreateEntrainementComponent,
    EditEntrainementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [PlanningService],
  bootstrap: [AppComponent]
})
export class AppModule { }
