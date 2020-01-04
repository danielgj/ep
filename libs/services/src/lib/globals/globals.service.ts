import { Injectable } from '@angular/core';
import { Event } from '@ep/models';


@Injectable({
    providedIn: 'root',
})
export class GlobalsService {
    private selectedEvent: Event;

    constructor() {
        this.initGlobals();
    }

    initGlobals(): void {
        this.selectedEvent = undefined;
        localStorage.clear();
    }

    getSelectedEvent(): Event {
        if (this.selectedEvent) return this.selectedEvent;
        return JSON.parse(localStorage.getItem('selectd_event'));
    }

    setSelectedEvent(event: Event): void {
        if (event) {
            this.selectedEvent = event;
            localStorage.setItem('selected_event', JSON.stringify(event));
        }
    }

}
