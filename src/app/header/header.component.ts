import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  mainRoutes = [
    { 'url': '/', 'name': 'Home' },
    { 'url': '/uber-uns', 'name': 'Über Uns' },
    { 'url': '/dienstleistungen', 'name': 'Dienstleistungen' },
    { 'url': '/team', 'name': 'Team' },
    { 'url': '/portfolio', 'name': 'Portfolio' },
    { 'url': '/preisliste', 'name': 'Preisliste' },
    { 'url': '/kontakt', 'name': 'Kontakt' }
  ];
}
