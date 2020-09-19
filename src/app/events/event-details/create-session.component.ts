import { Component, OnInit, Output, EventEmitter } from '@angular/core'
import { FormsModule, FormControl, Validators, FormGroup } from '@angular/forms'
import { ISession } from '../shared/event.model'
@Component({
    selector: 'create-session',
    templateUrl: './create-session.component.html',
    styles: [`
    em {float-right; color: red; padding-left:10px}
    .error input {background-color:#E3C3C5}
    .error ::-webkit-input-placeholder {background-color:#999;}
    .error ::-moz-placeholder {color:#999;}
    .error :-moz-placeholder {color:#999;}
    .error ::ms-input-placeholder {color:#999;}
  `]
})



export class CreateSesstionComponent implements OnInit{
    formCreateSession:FormGroup
    name:FormControl
    presenter:FormControl
    duration:FormControl
    level:FormControl
    abstract:FormControl


    @Output() addNewSession = new EventEmitter()
    @Output() addCencleSession = new EventEmitter()
    ngOnInit(){
        this.name = new FormControl ('', Validators.required)
        this.presenter = new FormControl('', Validators.required)
        this.duration = new FormControl ('', Validators.required)
        this.level = new FormControl ('', Validators.required)
        this.abstract = new FormControl ('',[Validators.required, Validators.maxLength(400)])

        this.formCreateSession = new  FormGroup({
            name: this.name,
            presenter: this.presenter,
            duration: this.duration,
            level: this.level,
            abstract: this.abstract
        })
    }

    saveSessionForm(formValues){
        let session:ISession = {
            id:undefined,
            name:formValues.name,
            presenter: formValues.presenter,
            duration: +formValues.duration,
            level: formValues.level,
            abstract: formValues.abstract,
            voters: [],
        }
        
        console.log("xsxsxsxsx", session)
        this.addNewSession.emit(session)

    }

    cencle(){
        this.addCencleSession.emit()
    }
    
}