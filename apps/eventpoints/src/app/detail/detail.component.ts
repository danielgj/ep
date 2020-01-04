import { Component } from '@angular/core';
import { GlobalsService } from '@ep/services';
import { environment } from '../../environments/environment';
import { Event } from '@ep/models';

@Component({
    selector: 'ep-detail-content',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss'],
})
export class DetailComponent {

    constructor(
        private globalsService: GlobalsService,
    ) { }
}
