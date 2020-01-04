import { Component } from '@angular/core';

@Component({
    selector: 'ep-full-page',
    template: `
  <div class="epFullPage">
    <ng-content></ng-content>
  </div>`,
    styleUrls: ['./layouts.component.scss'],
})
export class FullPageComponent {

}

@Component({
    selector: 'ep-main-content',
    template: `
  <div class="epMainContent">
    <ng-content></ng-content>
  </div>`,
    styleUrls: ['./layouts.component.scss'],
})
export class MainContentComponent {

}

@Component({
    selector: 'ep-side-bar-container',
    template: `
  <div class="epSideBarContainer">
    <ng-content></ng-content>
  </div>`,
    styleUrls: ['./layouts.component.scss'],
})
export class SideBarContainerComponent {

}