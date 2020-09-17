import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { userRouter } from './user.routers';
import { ProfileComponent } from './profile.component';


@NgModule({
    imports:[
        CommonModule,
        RouterModule.forChild(userRouter)
    ],
    declarations:[
        ProfileComponent

    ],
    providers:[],
})

export class UserModule {}