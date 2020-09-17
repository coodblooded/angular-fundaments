import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'

import {
  EventsListComponent,
  EventThumbnailComponent,
  CreateEventComponent,
  EventDtailsComponent ,
  EventsService,
  EventRoteActivatorServce
} 
from './events/index'

import { appRouters } from './router'
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav/nav-bar.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToasterService } from './common/toastr.service';
import { Error404Component } from './error/404.component'
@NgModule({
  imports: [
    BrowserModule,
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
    Error404Component
    
  ],
  providers: [
    EventsService,
    ToasterService,
    EventRoteActivatorServce,
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