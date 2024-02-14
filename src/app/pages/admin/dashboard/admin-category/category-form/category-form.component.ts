import { Component, OnInit, inject, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TitleComponent } from '../../components/title/title.component';
import { Store, select } from '@ngrx/store';

import * as fromCategory from '@store/category';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category-form',
  standalone: true,
  imports: [
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    TitleComponent,
  ],
  templateUrl: './category-form.component.html',
  styleUrl: './category-form.component.css',
})
export default class CategoryFormComponent implements OnInit {
  private store = inject(Store<any>);
  private route = inject(Router);
  private rutaActiva = inject(ActivatedRoute);

  public title = signal<string>('');
  public loading = signal<boolean>(false);
  private routeActive = signal<string>(this.route.url);

  public category = signal<fromCategory.CategoryResponse | null>(null);
  public id = signal<number>(0);

  ngOnInit(): void {
    const url = this.routeActive().split('/');
    this.id.set(this.rutaActiva.snapshot.params['id']);

    this.title.set(url[3]);

    if (url[3] != 'agregar') {
      this.store
        .pipe(select(fromCategory.selectLoading))
        .subscribe((state) => this.loading.set(state));
      this.store.dispatch(new fromCategory.ReadById(this.id()));

      this.store
        .pipe(select(fromCategory.selectCategory))
        .subscribe((data) => this.category.set(data));
    }
  }

  save(form: NgForm): void {
    if (form.valid) {
      this.store
        .pipe(select(fromCategory.selectLoading))
        .subscribe((state) => this.loading.set(state));

      const categoryRequest: fromCategory.CategoryRequest = {
        name: form.value.name,
        description: form.value.description,
      };

      if (this.title() != 'agregar') {
        this.store.dispatch(
          new fromCategory.Update(this.id(), categoryRequest)
        );
      } else {
        this.store.dispatch(new fromCategory.Create(categoryRequest));
      }
    }
  }
}
