import {Component} from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
  }
)
export class ServerComponent {
  id: number = 123
  private serverStatus = 'offline'

  getServerStatus() {
    return `${this.serverStatus.toUpperCase()}`
  }


}
