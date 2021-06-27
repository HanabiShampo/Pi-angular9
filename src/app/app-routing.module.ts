import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListTestComponent} from './PlanningTest/list-test/list-test.component';
import {CreateTestComponent} from './PlanningTest/create-test/create-test.component'


const routes: Routes = [
  {path: 'list-test', component: ListTestComponent},
  {path: 'create-test', component: CreateTestComponent},
  {path: '', component: ListTestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
