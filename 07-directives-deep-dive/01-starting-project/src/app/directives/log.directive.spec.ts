import { ElementRef } from '@angular/core';
import { LogDirective } from './log.directive';

describe('LogDirective', () => {
  it('should create an instance', () => {
    const mockElementRef: ElementRef = { nativeElement: document.createElement('div') };
    const directive = new LogDirective(mockElementRef);
    expect(directive).toBeTruthy();
  });
});
