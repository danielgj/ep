import { Component, OnInit } from '@angular/core';
import {
  EventsService,
  GlobalsService,
} from '@ep/services';
import { environment } from '../../environments/environment';
import { Event } from '@ep/models';


@Component({
  selector: 'ep-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss'],
})
export class EventListComponent implements OnInit {

  events: Event[];
  selectedId: string;

  constructor(
    private eventsService: EventsService,
    private globalsService: GlobalsService,
  ) {
    this.eventsService.setBaseUrl(environment.API_BASE_URL);
  }

  ngOnInit() {
    this.eventsService.getEvents().subscribe(
      (result) => {
        this.events = result;
      },
      (err) => {
        console.log(err);
      },
    );
  }

  selectEvent(event: Event) {
    this.globalsService.setSelectedEvent(event);
    this.selectedId = event.id;
  }

}
