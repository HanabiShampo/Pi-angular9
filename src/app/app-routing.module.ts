import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListTestComponent } from './PlanningTest/list-test/list-test.component';


const routes: Routes = [
  { path: 'list-test', component: ListTestComponent },
  { path: '', component: ListTestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
