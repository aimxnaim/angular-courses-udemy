import { ElementRef } from '@angular/core';
import { SafeLinkDirective } from './safe-link.directive';

describe('SafeLinkDirective', () => {
  it('should create an instance', () => {
    const mockElementRef = { nativeElement: document.createElement('a') } as ElementRef;
    const directive = new SafeLinkDirective(mockElementRef);
    expect(directive).toBeTruthy();
  });
});
