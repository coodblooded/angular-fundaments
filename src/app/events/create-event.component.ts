import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventsService } from './shared/events.service'
@Component({
    templateUrl: './create-event.component.html',
    styles: [`
    em {float-right; color: red; padding-left:10px}
    .error input {background-color:#E3C3C5}
    .error ::-webkit-input-placeholder {background-color:#999;}
    .error ::-moz-placeholder {color:#999;}
    .error :-moz-placeholder {color:#999;}
    .error ::ms-input-placeholder {color:#999;}
  `]
})
export class CreateEventComponent{
    newEvent
    isDirty: boolean = true
    constructor(private route: Router , private eventsService: EventsService){

    }

    cencle(){
        this.route.navigate(['/event'])
    }

    saveEvent(formValues){
        console.log(formValues)
        this.eventsService.saveEvent(formValues)
        console.log("eeeee")
        console.log("Dcdccdc")
        this.route.navigate(['/event'])

    }
}