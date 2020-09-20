import { Component, OnInit } from '@angular/core';
import { EventsService } from '../shared/events.service'
import { ActivatedRoute, Router } from '@angular/router'
import { ISession } from '../shared/event.model'

@Component({
    templateUrl: './event-details.component.html',
    styles: [`
    .container{left-padding:200px; right-padding:200px}
    .event-image{height:100px}
    a {cursor:pointer}
    `]

})
export class EventDtailsComponent implements OnInit{
    event:any
    addMode:boolean
    filterBy:string = 'all'
    sortBy:string = 'name'
    constructor(private eventsService:EventsService, private route: ActivatedRoute){

    }

    ngOnInit(){
        this.event = this.eventsService.getEvent(+this.route.snapshot.params['id'])
    }
    
    addSession(){
        this.addMode = true
    }

    addNewSession(session:ISession){
        const maxID = Math.max.apply(null, this.event.sessions.map(s => s.id))
        session.id = maxID + 1
        this.event.sessions.push(session)
        this.eventsService.updateSession(this.event)
        this.addMode = false

    }

    addCencleSession(){
        this.addMode = false
    }
}