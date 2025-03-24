import { Component, DestroyRef, inject, OnDestroy, OnInit } from '@angular/core';
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
  private interval?: ReturnType<typeof setInterval>;
  private destroyRef = inject(DestroyRef);

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
    this.interval = setInterval(() => {
      this.checkServerStatus();
    }, 1000);  
    
    this.destroyRef.onDestroy(() => {
      clearInterval(this.interval);
    });
  }

    
// ? below code is for ngOnDestroy() method
    // ngOnDestroy(): void {
    //   //Called once, before the instance is destroyed.
    //   //Add 'implements OnDestroy' to the class.
    //   clearInterval(this.interval);
    // }
}
