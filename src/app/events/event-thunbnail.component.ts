import { Component, Input} from '@angular/core';

@Component({ 
    selector:'event-thubmnail',
    template: `
    <div class="row">
    <div class="col">
    <div  [routerLink]="['/event', event.id]" class="well hverwell thumnail">
        <h2>{{event?.name}}</h2>
        <div>Date:{{event?.date}}</div>
        <div  [ngClass]="getClaslCss()" [ngSwitch]="event?.time">
        Time:{{event?.time}}
        <span *ngSwitchCase="'8:00 am'">(Early Start) </span>
        <span *ngSwitchCase="'10:00 am'">(Late Start) </span>
        <span *ngSwitchDefault>(Normal Start) </span>
        
        </div>
        <div>Price: \${{event?.price}}</div>
        <div *ngIf="event?.location" >
            <span class> Location: {{event?.location?.address}}</span>
            <br>
            {{event?.location?.city}}, {{event?.location?.country}}
        </div>
        <div *ngIf="event?.onlineUrl">
        Online URL : {{event?.onlineUrl}}
        </div>
    </div>
    </div>
    </div>
    ` ,  
    styles : [`
        .green {color: green !important}
        .bold {font-weight: green !important}
        .thumnail: {min-height: 310px;}
    `] 
})


export class EventThumbnailComponent{
    @Input() event:any

    getClaslCss(){

        if (this.event && this.event.time === '8:00 am'){
            return ['green', 'bold']
        }
        else { return []}
    }
}