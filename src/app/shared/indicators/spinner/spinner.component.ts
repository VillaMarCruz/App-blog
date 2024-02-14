import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import {
  MatProgressSpinnerModule,
  ProgressSpinnerMode,
} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [MatProgressSpinnerModule],
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.css',
})
export class SpinnerComponent {
  color: ThemePalette = 'warn';
  mode: ProgressSpinnerMode = 'indeterminate';
}
