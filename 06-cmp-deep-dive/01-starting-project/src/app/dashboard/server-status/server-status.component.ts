import { Component } from '@angular/core';
import { DashboardItemComponent } from "../dashboard-item/dashboard-item.component";

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [DashboardItemComponent],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent {
  currentStatus: 'online' | 'offline' | 'unknown' = 'offline';

  constructor() {
    setInterval(() => {
      this.checkServerStatus();
    }, 1000);
   }

   checkServerStatus() {
    if (Math.random() < 0.5) {
      this.currentStatus = 'online';
    } else if(Math.random() < 0.9) {
      this.currentStatus = 'offline';
    } else {
      this.currentStatus = 'unknown';
    }
   }
}
