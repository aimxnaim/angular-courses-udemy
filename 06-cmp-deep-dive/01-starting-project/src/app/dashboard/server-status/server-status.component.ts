import { Component, OnInit } from '@angular/core';
import { DashboardItemComponent } from "../dashboard-item/dashboard-item.component";

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [DashboardItemComponent],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit {
  currentStatus: 'online' | 'offline' | 'unknown' = 'offline';

  constructor() {}

   checkServerStatus() {
    if (Math.random() < 0.5) {
      this.currentStatus = 'online';
    } else if(Math.random() < 0.9) {
      this.currentStatus = 'offline';
    } else {
      this.currentStatus = 'unknown';
    }
   }

   ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    setInterval(() => {
      this.checkServerStatus();
    }, 1000);   }
}
