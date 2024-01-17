import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/header/header.component';

const Componentes = [
  HeaderComponent
]

@Component({
  standalone: true,
  imports: [Componentes],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export default class HomeComponent {

}
