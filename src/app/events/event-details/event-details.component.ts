import { Component, OnInit } from '@angular/core';
import { EventsService } from '../shared/events.service'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
    templateUrl: './event-details.component.html',
    styles: [`
    .container{left-padding:200px; right-padding:200px}
    .event-image{height:100px}
    `]

})
export class EventDtailsComponent implements OnInit{
    event:any
    constructor(private eventsService:EventsService, private route: ActivatedRoute){

    }

    ngOnInit(){
        this.event = this.eventsService.getEvent(+this.route.snapshot.params['id'])
    }
    
}