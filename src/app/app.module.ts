import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {
    MatFormFieldModule,
    MAT_FORM_FIELD_DEFAULT_OPTIONS
} from '@angular/material/form-field';
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { IfDirective } from './if.directive';
import { UseDirective } from './use.directive';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginButtonComponent } from './components/top-nav/login-button/login-button.component';
import { LoginComponent } from './pages/login/login.component';
import { UserPanelComponent } from './components/user-panel/user-panel.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductComponent } from './pages/product/product.component';
import { CmsHomeComponent } from './pages/cms-home/cms-home.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';


import { NGCarouselModule } from './ngcarousel/ngcarousel.module';
import { PurchaseButtonComponent } from './components/purchase-button/purchase-button.component';
import { CustomerReviewComponent } from './pages/product/customer-review/customer-review.component';
import { PurchaseComponent } from './pages/purchase/purchase.component';
import { PurchaseSuccessComponent } from './pages/purchase-success/purchase-success.component';
import { ClickAwayComponent } from './components/click-away/click-away.component';
import { ResizeListenerModule } from './resize-listener/resize-listener.module';
import { PageTemplateComponent } from './pages/page-template/page-template.component';
import { CartComponent } from './components/user-panel/cart/cart.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    IfDirective,
    UseDirective,
    HomeComponent,
    PageNotFoundComponent,
    LoginButtonComponent,
    LoginComponent,
    UserPanelComponent,
    ProductCardComponent,
    ProductComponent,
    CmsHomeComponent,
    SideNavComponent,
    PurchaseButtonComponent,
    CustomerReviewComponent,
    PurchaseComponent,
    PurchaseSuccessComponent,
    ClickAwayComponent,
    PageTemplateComponent,
    CartComponent,
    ShoppingCartComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    BrowserModule,
    BrowserAnimationsModule,

    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatSelectModule,
    MatToolbarModule,

    NGCarouselModule,
    ResizeListenerModule,
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
