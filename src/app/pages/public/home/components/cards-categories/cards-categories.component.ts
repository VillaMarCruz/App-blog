import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { Category } from '@models/category.response';

@Component({
  selector: 'app-cards-categories',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatGridListModule],
  templateUrl: './cards-categories.component.html',
  styleUrl: './cards-categories.component.css'
})
export class CardsCategoriesComponent {
  categories: Category[] =  [
    {
      id: 1,
      name: "Belleza",
      description: "nuevo",
      created_at: "",
      updated_at: ""
    },
    {
      id: 1,
      name: "Belleza",
      description: "nuevo",
      created_at: "",
      updated_at: ""
    },
    {
      id: 1,
      name: "Belleza",
      description: "nuevo",
      created_at: "",
      updated_at: ""
    },
    {
      id: 1,
      name: "Belleza",
      description: "nuevo",
      created_at: "",
      updated_at: ""
    }
  ]



}
