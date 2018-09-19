import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  mainRoutes = [
    { 'url': '/', 'name': 'Hauptseite' },
    { 'url': '/dienstleistungen', 'name': 'Dienstleistungen' },
    { 'url': '/portfolio', 'name': 'Portfolio' },
    { 'url': '/kontakt', 'name': 'Kontakt' }
  ];

  public isCollapsed = true;
}
