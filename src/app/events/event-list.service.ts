import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { EventsService } from './shared/events.service'
import { map } from 'rxjs/operators';
export class EventsListResolver implements Resolve<any>{

    constructor(private eventsService: EventsService){

    }
    resolve(){
        return this.eventsService.get_events().pipe(map(events => events))
    }
}