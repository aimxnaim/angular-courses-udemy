import { Component, DestroyRef, OnDestroy, OnInit, inject } from '@angular/core';
import { interval, take } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, OnDestroy{

  private destroyRef = inject(DestroyRef)
  subscription: any

  ngOnInit(): void {
    const time$ = interval(1000).pipe(
      take(5)
    )
    time$
    this.subscription = time$.subscribe({
      next: (v) => console.log(v),
      complete: () => console.log('complete')
    })
  }

  ngOnDestroy(): void {
    this.destroyRef.onDestroy(() => {
      this.subscription.unsubscribe()
    })  
  }
}
