import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';

const ImportMatModule = [
  MatToolbarModule,
  MatButtonModule, MatMenuModule
]

const ImportModuleAngular = [
  RouterModule
]

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ImportMatModule, ImportModuleAngular],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
