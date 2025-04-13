import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appLog]',
  standalone: true,
  host: {
    '(click)': 'onClick()',
  }
})
export class LogDirective {

  constructor(
    private el : ElementRef,
  ) { }

  onClick() {
    console.log('LogDirective clicked!');
    console.log(this.el.nativeElement);
  }

}
