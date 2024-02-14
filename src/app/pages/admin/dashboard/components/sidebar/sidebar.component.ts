import { Component, Input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserResponse } from '@store/user';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  @Input({ required: true }) user = signal<any>(null);
}
