import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductComponent } from './pages/product/product.component';
import { PurchaseComponent } from './pages/purchase/purchase.component';
import { PurchaseSuccessComponent } from './pages/purchase-success/purchase-success.component';
import { SettingComponent } from './pages/setting/setting.component';
import { HelpComponent } from './pages/help/help.component';


const routes: Routes = [{
    path: "home",
    redirectTo: '',
    pathMatch: 'full'
  }, {
    path: 'login',
    pathMatch: 'full',
    component: LoginComponent,
  }, {
    path: 'category/:category',
    component: HomeComponent,
  }, {
    path: "purchase-success",
    component: PurchaseSuccessComponent,
  }, {
    path: 'setting',
    component: SettingComponent,
  }, {
    path: 'help',
    component: HelpComponent,
  }, {
    path: "product/:productId",
    component: ProductComponent,
  }, {
    path: "product/:productId/purchase",
    component: PurchaseComponent,
  }, {
    path: "product/:productId/purchase-success",
    component: PurchaseSuccessComponent,
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
