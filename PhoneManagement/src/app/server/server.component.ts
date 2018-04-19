import { Component } from '@angular/core'

@Component({
    selector: 'app-server',
    templateUrl: 'server.component.html'
})

export class ServerComponent{
    serverName: string = 'A1';
    serverStatus: string = 'offline';

    openServer(){
        this.serverStatus = 'online';
    }
}