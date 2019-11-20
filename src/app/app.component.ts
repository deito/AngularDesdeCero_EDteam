import { Component } from '@angular/core';

@Component({
  selector: 'ed-root', // <ed-root></ed-root>
  template: `
    <h1>Curso de Angular</h1>
    <span class="titulo fuente">EDteam</span>
  `,
  styles: [
    'h1 {font-weight: bold}',
    'h1 {font-size: 10px}',
    '.titulo {color: red;}',
    '.fuente {font-size: 20px}'
  ]
})
export class AppComponent {
  title = 'edteam-curso-angular';
}
