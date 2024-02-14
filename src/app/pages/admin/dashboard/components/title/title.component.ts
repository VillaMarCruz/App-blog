import { Component, Input, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css'
})
export class TitleComponent {
  @Input() title = signal<string>("");

  public route = inject(Router);
  public routeActive = signal<any>(this.route.url)

  sendRoute(){
    this.routeActive.update( value => value + "/agregar" );
    this.route.navigate([ this.routeActive() ])
  }

}
