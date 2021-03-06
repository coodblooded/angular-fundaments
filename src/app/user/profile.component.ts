import { Component, OnInit } from '@angular/core'
import { Form, FormControl, FormGroup , Validators } from '@angular/forms'
import { AuthService } from './auth.service'
import { Router } from '@angular/router';
@Component({
  templateUrl: './profile.component.html',
  styles: [`
    em {float-right; color: red; padding-left:10px}
    .error input {background-color:#E3C3C5}
    .error ::-webkit-input-placeholder {background-color:#999;}
    .error ::-moz-placeholder {color:#999;}
    .error :-moz-placeholder {color:#999;}
    .error ::ms-input-placeholder {color:#999;}
  `]
})
export class ProfileComponent implements OnInit {
  profileForm:FormGroup
  private firstName : FormControl
  private lastName : FormControl
  constructor (private authService: AuthService, private router: Router){

  }
  ngOnInit(){
    this.firstName =  new FormControl
                    (this.authService.currentuser.firstName, [Validators.required, Validators.pattern("[A-Za-z].*")])
    this.lastName = new FormControl(this.authService.currentuser.lastName, Validators.required)
    this.profileForm = new FormGroup({
        firstName: this.firstName,
        lastName: this.lastName
    })

  }

  SaveProfile(formValues){
    if (this.profileForm.valid){
      this.authService.updateCurrentUser(formValues.firstName, formValues.lastName)
      this.router.navigate(['/event'])
    }
  }

  cencle(){
    this.router.navigate(['/event'])
  }
   
  validateFirstName(){
    return this.firstName.valid || this.lastName.untouched
  }  

  validateLastName(){
    return this.lastName.valid || this.lastName.untouched
  }
}