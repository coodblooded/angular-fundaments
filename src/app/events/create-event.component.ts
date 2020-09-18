import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
    isDirty: boolean = true
    constructor(private router: Router){

    }

    cencle(){
        this.router.navigate(['/event'])
    }

    saveEvent(formValues){
        console.log(formValues)

    }
}