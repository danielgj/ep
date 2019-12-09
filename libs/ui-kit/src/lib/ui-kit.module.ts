import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// UI Components Bdeo
import {
  FullPageComponent,
  MainContentComponent,
  SideBarContainerComponent,
} from './layouts/layouts.component';


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    FullPageComponent,
    MainContentComponent,
    SideBarContainerComponent,
  ],
  exports: [
    FullPageComponent,
    MainContentComponent,
    SideBarContainerComponent,
  ],
})
export class UiKitModule { }
