
import { Router,ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { EventsService } from '../shared/events.service'

@Injectable()
export class EventRoteActivatorServce implements CanActivate {

    constructor(private router:Router, private eventsService: EventsService){

    }
    canActivate(route:ActivatedRouteSnapshot){
        const isExiting = !!this.eventsService.getEvent(+route.params['id'])
        if (!isExiting){
            this.router.navigate(['/404']) 
        }
        return isExiting

    }



}