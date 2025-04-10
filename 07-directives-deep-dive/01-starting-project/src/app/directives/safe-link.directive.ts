import { Directive, Input } from '@angular/core';

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onConfirmLeavePage($event)',
  }
})
export class SafeLinkDirective {

  @Input({alias: 'mySafeLink'}) queryParam?: string;

  constructor() { }

  onConfirmLeavePage(event: MouseEvent) {
    const confirmLeave = window.confirm('Are you sure you want to leave this page?');
    if (confirmLeave) {
      const address = (event.target as HTMLAnchorElement).href;
      (event.target as HTMLAnchorElement).href = this.queryParam ? address + '?from=' + this.queryParam : address;
      return
    }

    // ? Cancel the link's default navigation behavior
    event.preventDefault();

  }

}
