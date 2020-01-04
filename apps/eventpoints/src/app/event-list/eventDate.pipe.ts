import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'eventListDate' })
export class EventDatePipe implements PipeTransform {

    constructor() { }

    transform(value: string): string {
        const transformed = value.substr(0, 5).replace('-', '/');
        return transformed;
    }
}