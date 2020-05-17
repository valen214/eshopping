import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './pages/login/login.component';


const routes: Routes = [{
    path: "home",
    redirectTo: '',
    pathMatch: 'full'
  }, {
    path: 'login',
    pathMatch: 'full',
    component: LoginComponent,
  }, {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  }, {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
