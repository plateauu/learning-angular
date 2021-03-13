import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-servers',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>
  // `,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false

  constructor() {
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.allowNewServer = true
    }, 2000)
  }

  isServerAllowed(): boolean {
    return !this.allowNewServer
  }

}
