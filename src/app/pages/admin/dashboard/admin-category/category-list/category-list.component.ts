import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Read } from '@store/category/category.actions';
import { CategoryResponse } from '@store/category/category.models';
import { selectListCategories } from '@store/category/category.selectors';
import * as fromCategory from '@store/category';
import { TitleComponent } from '../../components/title/title.component';
import { SpinnerComponent } from '@shared/indicators/spinner/spinner.component';

import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    RouterModule,
    TitleComponent,
    SpinnerComponent,
  ],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css',
})
export default class CategoryListComponent {
  public title = signal<string>('Categorías');

  public loading = signal<boolean>(false);
  public categories = signal<CategoryResponse[]>([]);
  public displayedColumns = signal<string[]>(['ACCIONES']);

  constructor(private store: Store<any>, private cd: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    console.log('Hola mundo');
    this.store
      .pipe(select(fromCategory.selectLoading))
      .subscribe((state) => this.loading.set(state));

    this.store.dispatch(new fromCategory.Read());

    this.store.select(selectListCategories).subscribe({
      next: (data) => {
        if (data && data.length > 0) {
          this.displayedColumns.set([...Object.keys(data[0]), 'acciones']);
          this.categories.set(data);
        }
      },
    });

    this.cd.detectChanges();
  }

  onDelete(id: number): void {
    this.store
      .pipe(select(fromCategory.selectLoading))
      .subscribe((state) => this.loading.set(state));

    this.store.dispatch(new fromCategory.Delete(id));

    this.categories.update((value) => value.filter((p) => p.id !== id));
  }
}
