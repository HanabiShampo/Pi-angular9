import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListUserComponent} from './list-user/list-user.component';
import {UpdateUComponent} from './update-u/update-u.component';
import {AjoutUComponent} from './ajout-u/ajout-u.component';
import {LoginComponent} from './login/login.component';


export const routes: Routes = [  { path : 'list', component: ListUserComponent},
  { path: 'updUsr/:id', component: UpdateUComponent},
  { path : 'Ajout', component: AjoutUComponent},
  { path : 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
