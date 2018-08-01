import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  // TODO: Add animation.
  getRouterOutletState(routerOutlet: RouterOutlet) {
    const routeData = routerOutlet.activatedRouteData['animation'];
    return routeData ? routeData : 'rootPage';
  }
}
