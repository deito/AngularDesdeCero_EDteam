import { Component } from '@angular/core';

@Component({
  selector: 'ed-root', // <ed-root></ed-root>
  template: `
    <h1>Curso de Angular</h1>
    <span class="titulo fuente">EDteam</span>
  `,
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'edteam-curso-angular';
}
