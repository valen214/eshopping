import { BrowserModule } from '@angular/platform-browser';
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
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { MenuButtonComponent } from './top-nav/menu-button/menu-button.component';
import { IfDirective } from './if.directive';
import { UseDirective } from './use.directive';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginButtonComponent } from './top-nav/login-button/login-button.component';
import { LoginComponent } from './pages/login/login.component';
import { UserPanelComponent } from './top-nav/user-panel/user-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    IfDirective,
    UseDirective,
    HomeComponent,
    PageNotFoundComponent,
    MenuButtonComponent,
    LoginButtonComponent,
    LoginComponent,
    UserPanelComponent
  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    BrowserModule,
    BrowserAnimationsModule,

    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatToolbarModule,

  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
