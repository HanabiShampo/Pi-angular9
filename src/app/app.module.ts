import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {PlanningService} from "./service/planning.service";
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import {ListTestComponent} from './PlanningTest/list-test/list-test.component';
import { CreateTestComponent } from './PlanningTest/create-test/create-test.component';
import { EditTestComponent } from './PlanningTest/edit-test/edit-test.component';
import { ListMatchComponent } from './PlanningMatch/list-match/list-match.component';
import { CreateMatchComponent } from './PlanningMatch/create-match/create-match.component';
import { EditMatchComponent } from './PlanningMatch/edit-match/edit-match.component';

@NgModule({
  declarations: [
    AppComponent,
    ListTestComponent,
    CreateTestComponent,
    EditTestComponent,
    ListMatchComponent,
    CreateMatchComponent,
    EditMatchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PlanningService],
  bootstrap: [AppComponent]
})
export class AppModule { }
