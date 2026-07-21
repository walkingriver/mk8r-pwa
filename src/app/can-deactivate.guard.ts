import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

export interface CanDeactivateComponent {
  canDeactivate(): boolean | Observable<boolean> | Promise<boolean>;
}

@Injectable()
export class CanDeactivateGuard  {
  canDeactivate(component: CanDeactivateComponent): boolean | Observable<boolean> | Promise<boolean> {
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}
