import { Component, DestroyRef, OnDestroy, OnInit, effect, inject, signal } from '@angular/core';
import { interval, map, take } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {

  private destroyRef = inject(DestroyRef)
  subscription: any
  onCountClick = signal(0)

  constructor() {
    effect(() => {
      console.log('onCountClick', this.onCountClick())
    })
  }

  ngOnInit(): void {
    // this.subscription = interval(1000)
    //   .pipe(
    //     take(5),
    //     map((v) => v * 2)
    //   )
    //   .subscribe({
    //     next: (v) => console.log(v),
    //     complete: () => console.log('complete')
    //   })
  }

  ngOnDestroy(): void {
    this.destroyRef.onDestroy(() => {
      this.subscription.unsubscribe()
    })
  }

  onClick() {
    this.onCountClick.update((v) => v + 1)
  }
}
