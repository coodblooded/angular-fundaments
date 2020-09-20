import { Component, Input, OnChanges } from '@angular/core'
import { Router } from '@angular/router'
import { ISession } from '../shared/event.model'

@Component({
    selector: 'session-list',
    templateUrl: './session-list.component.html'
})
export class SessionListComponent implements OnChanges{
    @Input() sessions:ISession[]
    @Input() filterBy:string;
    @Input() sortBy:string;
    visibleData:ISession[] = []

    ngOnChanges(){    
        console.log(this.sortBy)     
        if(this.sessions){
            this.FilterSessionsData(this.filterBy)
        }
        this.sortBy === 'name' ? this.visibleData.sort(ShortName) : this.visibleData.sort(ShortVotes)
    }

    FilterSessionsData(filter){
        console.log(filter)
        if(filter === 'all'){
            this.visibleData = this.sessions
        }
        else
        {
            this.visibleData = this.sessions.filter(session => {
                return session.level.toLocaleLowerCase() === filter
            } )
        }
    }


}

function ShortName(s1:ISession, s2:ISession){
    if (s1.name > s2.name){
        return 1
    }
    else if (s1.name === s2.name) return 0
    else return -1
}

function ShortVotes(s1:ISession, s2:ISession){
    return s2.voters.length - s1.voters.length
}