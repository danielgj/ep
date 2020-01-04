import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { BaseService } from '../base/base.service';
import { Event } from '@ep/models';

@Injectable({
    providedIn: 'root',
})
export class EventsService extends BaseService {
    private EVENTS_URL = '/events';

    constructor(public http: HttpClient) {
        super(http);
    }

    getEvents() {
        return this.http.get<Event[]>(this.baseUrl + this.EVENTS_URL)
            .pipe(
                tap((result: any) => {
                    // Aqui parseo los datos antes de devolverlos
                    console.log('Resultado:', result);
                }),
                map((result) => {
                    return result;
                }),
                catchError(this.handleError<Event[]>('event', this.baseUrl + this.EVENTS_URL)),
            );
    }
}
