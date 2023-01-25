import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanactivateGuard } from './canactivate.guard';
import { CandesactivateGuard } from './candesactivate.guard';

import { HomeComponent } from './principal/home/home.component';
import { LoginComponent } from './principal/login/login.component';
import { MenuComponent } from './principal/menu/menu.component';
import { RegisterComponent } from './principal/register/register.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent, canActivate: [CanactivateGuard]},
  {path: 'home', component: MenuComponent, canActivate: [CanactivateGuard]},
  {path: 'register', component: RegisterComponent, canActivate: [CanactivateGuard], canDeactivate: [CandesactivateGuard]},

  {path: '', component: LoginComponent },
  {path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
