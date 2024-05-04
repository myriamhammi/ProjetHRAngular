import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DashboardFormationComponent } from './dashboard-formation/dashboard-formation.component';
import { Login2Component } from './login2/login2.component';

const routes: Routes = [
  { path:'', redirectTo:'/home',pathMatch:'full'},
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent }, // Route vers le tableau de bord
  { path: 'dashF', component: DashboardFormationComponent } ,// Route vers le tableau de bord
  { path: 'login2', component: Login2Component } // Route vers le tableau de bord

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
