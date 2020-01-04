import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MainLayoutComponent } from './layouts/main-layout.component';
import { NotFoundLayoutComponent } from './layouts/not-found-layout.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { EventListComponent } from './event-list/event-list.component';

import { UiKitModule } from '@ep/ui-kit';
import { ServicesModule } from '@ep/services';
import { ModelsModule } from '@ep/models';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    NotFoundLayoutComponent,
    HomeComponent,
    HeaderComponent,
    EventListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    UiKitModule,
    ServicesModule,
    ModelsModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
