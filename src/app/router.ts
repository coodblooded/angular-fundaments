import  { Routes } from '@angular/router'
import {EventsListComponent} from './events/events.component';
import { EventDtailsComponent } from './events/event-details/event-details.component'
import { CreateEventComponent } from './events/create-event.component'
import { Error404Component } from './error/404.component'
import { EventRoteActivatorServce } from './events/event-details/event-route-activatior.service'

export const appRouters:Routes = [

    {path:'event/new', component:CreateEventComponent, canDeactivate:['canDeactivateNewEvent']},
    {path:'event', component:EventsListComponent},
    {path:'event/:id', component:EventDtailsComponent, canActivate:[EventRoteActivatorServce]},
    {path:'404', component:Error404Component},
    {path:'', redirectTo:'/event', pathMatch:'full'},
    {path:'user', loadChildren:() => import('./user/user.module').then(usr => usr.UserModule)}
]