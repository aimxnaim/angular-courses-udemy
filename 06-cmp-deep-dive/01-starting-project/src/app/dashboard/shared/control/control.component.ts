import { AfterContentInit, Component, contentChild, ElementRef, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()'
  }
})
export class ControlComponent implements AfterContentInit {
  label = input.required<string>();
  for = input.required<string>();
  private control = contentChild.required<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input')

  ngAfterContentInit(): void {
    // ...
  }

  onClick() {
    console.log('Control:', this.control());
  }


}
