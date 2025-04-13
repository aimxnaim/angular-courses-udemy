import { AuthDirective } from './auth.directive';

import { TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthService } from '../services/auth.service';

describe('AuthDirective', () => {
  let mockAuthService: jasmine.SpyObj<AuthService>;
  let mockTemplateRef: TemplateRef<any>;
  let mockViewContainerRef: ViewContainerRef;

  beforeEach(() => {
    mockAuthService = jasmine.createSpyObj('AuthService', ['isAuthenticated']);
    mockTemplateRef = {} as TemplateRef<any>;
    mockViewContainerRef = {} as ViewContainerRef;
  });

  it('should create an instance', () => {
    const directive = new AuthDirective(mockAuthService, mockTemplateRef, mockViewContainerRef);
    expect(directive).toBeTruthy();
  });
});
