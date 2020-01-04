import { Component, OnInit } from '@angular/core';
import { EventsService } from '@ep/services';
import { environment } from '../../environments/environment';
import { Event } from '@ep/models';


@Component({
  selector: 'ep-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss'],
})
export class EventListComponent implements OnInit {

  events: Event[];

  constructor(
    private eventsService: EventsService,
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
    alert(event.id);
  }

}
