import { Component, OnInit} from '@angular/core';
import { EventsService } from './shared/events.service'
import { ToasterService } from '../common/toastr.service';
@Component({
    templateUrl:'./events-list.component.html'
    
})

export class EventsListComponent implements OnInit{
    events:any
    constructor(private eventsService: EventsService, private toasterService:ToasterService){
     }

    ngOnInit(){

    this.eventsService.get_events().subscribe(events => {
        this.events = events
    })

    }
    handleThumpNail(eventName){
        this.toasterService.success(eventName)
    }
}