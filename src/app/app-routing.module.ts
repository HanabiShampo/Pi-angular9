import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListTestComponent} from './PlanningTest/list-test/list-test.component';
import {CreateTestComponent} from './PlanningTest/create-test/create-test.component'
import {EditTestComponent} from './PlanningTest/edit-test/edit-test.component'
import {ListMatchComponent} from './PlanningMatch/list-match/list-match.component';
import { CreateMatchComponent } from './PlanningMatch/create-match/create-match.component';
import { EditMatchComponent } from './PlanningMatch/edit-match/edit-match.component';
import { ListEntrainementComponent } from './PlanningEntrainement/list-entrainement/list-entrainement.component';
import { CreateEntrainementComponent } from './PlanningEntrainement/create-entrainement/create-entrainement.component';

const routes: Routes = [
  {path: 'list-test', component: ListTestComponent},
  {path: 'create-test', component: CreateTestComponent},
  {path: 'edit-test/:id', component: EditTestComponent},
  {path: 'list-match', component: ListMatchComponent},
  {path: 'create-match', component: CreateMatchComponent},
  {path: 'edit-match/:id', component: EditMatchComponent},
  {path: 'list-entrainement', component: ListEntrainementComponent},
  {path: 'create-entrainement', component: CreateEntrainementComponent},
  {path: '', component: ListTestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
