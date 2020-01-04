import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {
  FullPageComponent,
  MainContentComponent,
  SideBarContainerComponent,
} from './layouts/layouts.component';
import { MainLayoutComponent } from './layouts/main-layout.component';
import { NotFoundLayoutComponent } from './layouts/not-found-layout.component';
import { MapComponent } from './map/map.component';
import { DetailComponent } from './detail/detail.component';
import { HeaderComponent } from './header/header.component';
import { EventListComponent } from './event-list/event-list.component';

import { EventDatePipe } from './event-list/eventDate.pipe';

import { ServicesModule } from '@ep/services';
import { ModelsModule } from '@ep/models';

@NgModule({
  declarations: [
    AppComponent,
    EventDatePipe,
    FullPageComponent,
    MainContentComponent,
    SideBarContainerComponent,
    MainLayoutComponent,
    NotFoundLayoutComponent,
    MapComponent,
    DetailComponent,
    HeaderComponent,
    EventListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ServicesModule,
    ModelsModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
