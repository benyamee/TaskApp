import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './login/login.component';
import { DetailviewComponent } from './detailview/detailview.component';
import { TaskviewComponent } from './taskview/taskview.component';
import { RouteGuardService } from './Services/routeguard.service';

const routes: Routes = [
  { path: 'tasks', component: TaskviewComponent, canActivate : [RouteGuardService]},
  { path: 'tasks/:id', component: DetailviewComponent, canActivate : [RouteGuardService]},
  { path: 'login', component: AccountComponent},
  { path: 'register', component: AccountComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }