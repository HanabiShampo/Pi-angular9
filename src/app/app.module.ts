import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {PlanningService} from "./service/planning.service";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListTestComponent } from './PlanningTest/list-test/list-test.component';
import {HttpClientModule, HttpHeaders} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    ListTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PlanningService],
  bootstrap: [AppComponent]
})
export class AppModule { }
