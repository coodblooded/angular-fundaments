import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import {
  EventsListComponent,
  EventThumbnailComponent,
  CreateEventComponent,
  EventDtailsComponent ,
  EventsService,
  EventRoteActivatorServce,
  SessionListComponent,
  DurationPipe
} 
from './events/index'
import { CreateSesstionComponent } from './events/event-details/create-session.component'

import { AuthService } from './user/auth.service';
import { appRouters } from './router'
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav/nav-bar.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToasterService } from './common/toastr.service';
import { CollapseWellComponent } from './common/collapse.component';
import { Error404Component } from './error/404.component'
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRouters),
    NgbModule
  ],
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDtailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSesstionComponent,
    SessionListComponent,
    CollapseWellComponent,
    DurationPipe
  
    
  ],
  providers: [
    EventsService,
    ToasterService,
    EventRoteActivatorServce,
    AuthService,
    {provide:'canDeactivateNewEvent', useValue:isDertyPage}
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function isDertyPage(component:CreateEventComponent) {
  if(component.isDirty){
    return window.confirm("Are you sure you want to close")
  }
 return false
}