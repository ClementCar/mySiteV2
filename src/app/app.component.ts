import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <button class="btn btn-success"></button>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'mySiteV2';
}
