import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MainLayoutComponent } from './layouts/main-layout.component';
import { NotFoundLayoutComponent } from './layouts/not-found-layout.component';
import { HomeComponent } from './home/home.component';

import { UiKitModule } from '@ep/ui-kit';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    NotFoundLayoutComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    UiKitModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
