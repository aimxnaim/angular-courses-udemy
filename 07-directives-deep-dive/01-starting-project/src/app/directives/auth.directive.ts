import { Directive, effect, inject, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Directive({
  selector: '[appAuth]',
  standalone: true
})
export class AuthDirective {

  // private templateRef = inject(TemplateRef);

  @Input({alias: 'appAuth'}) roleType!: string;
  constructor(
    private auth : AuthService,
    private templateRef: TemplateRef<HTMLElement>,
    private viewContainer: ViewContainerRef
  ) {
    effect(() => {
      const isRole = this.auth.activePermission() === this.roleType;
      if (isRole) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      }else{
        this.viewContainer.clear();
      }
    })
   }

}
