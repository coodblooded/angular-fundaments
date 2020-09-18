import { Component } from '@angular/core';
import { AuthService } from './auth.service'
import { Router } from '@angular/router';
@Component({
    selector:'login-form',
    templateUrl: './login-form.component.html', 
    styles: [`
    em {flot-right;color:red;padding-left:10px}
    `]
})


export class LoginFormComponent{
    userName
    password
    constructor (private authService: AuthService, private router: Router){

    }
    login(formValues){
        this.authService.loginUser(formValues.userName, formValues.password)
        this.router.navigate(['/event'])
    }
    cencle(){
        this.router.navigate(['/event'])
    }

}