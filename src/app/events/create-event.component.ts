import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    template: `
            <h1>Create New Event</h1>
            <div class="col-md-6">
            <h3>[Create New Event]</h3>
            <br>
            <br>
            <button class="btn btn-primary" type="submit">Save</button>
            <button id="btn-clss" class="btn btn-default " type="submit" (click)="cencle()">Cencle</button>
            </div>
    `,
    styles: [`
    #btn-clss {left-margin:50px}

    `]
})
export class CreateEventComponent{
    isDirty: boolean = true
    constructor(private router: Router){

    }

    cencle(){
        this.router.navigate(['/event'])
    }

}