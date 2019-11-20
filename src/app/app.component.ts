import { Component } from '@angular/core';

@Component({
  selector: 'ed-root', // <ed-root></ed-root>
  template: `
    <ed-navbar></ed-navbar>
    <ed-sidenav></ed-sidenav>
    <ed-dashboard></ed-dashboard>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'edteam-curso-angular';
}
