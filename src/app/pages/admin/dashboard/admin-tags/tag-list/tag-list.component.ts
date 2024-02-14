import { ChangeDetectorRef, Component, signal } from '@angular/core';
import { TitleComponent } from '../../components/title/title.component';
import { SpinnerComponent } from '@shared/indicators/spinner/spinner.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TagResponse } from '@store/tag';
import { Store, select } from '@ngrx/store';

import * as fromTag from '@store/tag';

export const importComponents = [TitleComponent, SpinnerComponent];

export const importAngularMaterial = [
  MatButtonModule,
  MatTableModule,
  MatIconModule,
];

@Component({
  selector: 'app-tag-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    importComponents,
    importAngularMaterial,
  ],
  templateUrl: './tag-list.component.html',
  styleUrl: './tag-list.component.css',
})
export default class TagListComponent {
  public title = signal<string>('Etiquetas');

  public loading = signal<boolean>(false);
  public tags = signal<TagResponse[]>([]);
  public displayedColumns = signal<string[]>(['ACCIONES']);

  constructor(private store: Store<any>, private cd: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.store
      .pipe(select(fromTag.selectLoading))
      .subscribe((state) => this.loading.set(state));

    this.store.dispatch(new fromTag.Read());

    this.store.select(fromTag.selectListTags).subscribe({
      next: (data) => {
        if (data && data.length > 0) {
          this.displayedColumns.set([...Object.keys(data[0]), 'acciones']);
          this.tags.set(data);
        }
      },
    });

    this.cd.detectChanges();
  }

  onDelete(id: number): void {
    this.store
      .pipe(select(fromTag.selectLoading))
      .subscribe((state) => this.loading.set(state));

    this.store.dispatch(new fromTag.Delete(id));

    this.tags.update((value) => value.filter((p) => p.id !== id));
  }
}
