import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { userRouter } from './user.routers';
import { ProfileComponent } from './profile.component';
import { LoginFormComponent } from './login.component';


@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(userRouter)
    ],
    declarations:[
        ProfileComponent,
        LoginFormComponent

    ],
    providers:[],
})

export class UserModule {}