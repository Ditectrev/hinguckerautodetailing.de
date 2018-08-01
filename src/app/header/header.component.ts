import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  mainRoutes = [
    { 'url': '/uber-uns', 'name': 'Über Uns' },
    { 'url': '/dienstleistungen', 'name': 'Dienstleistungen' },
    { 'url': '/portfolio', 'name': 'Portfolio' },
    { 'url': '/kontakt', 'name': 'Kontakt' }
  ];
}
