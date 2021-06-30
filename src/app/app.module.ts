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

@NgModule({
  declarations: [
    AppComponent,
    ListTestComponent,
    CreateTestComponent,
    EditTestComponent
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
