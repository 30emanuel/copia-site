import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  listLinks = [
    {name: 'Sobre', link: '#about'},
    {name: 'Cervejas', link: '#drinks'},
    {name: 'Salão', link: '#hall'},
    {name: 'Contato', link: '#contact'}
  ]
}
