import { Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TitleComponent } from '../../components/title/title.component';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import * as fromTag from '@store/tag';

export const importsAngularMaterial = [
  MatInputModule,
  MatButtonModule,
  MatFormFieldModule,
];

export const importsComponents = [TitleComponent];

@Component({
  selector: 'app-tag-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    importsAngularMaterial,
    importsComponents,
  ],
  templateUrl: './tag-form.component.html',
  styleUrl: './tag-form.component.css',
})
export default class TagFormComponent {
  private store = inject(Store<any>);
  private route = inject(Router);
  private rutaActiva = inject(ActivatedRoute);

  public title = signal<string>('');
  public loading = signal<boolean>(false);
  private routeActive = signal<string>(this.route.url);

  public category = signal<fromTag.TagResponse | null>(null);
  public id = signal<number>(0);

  ngOnInit(): void {
    const url = this.routeActive().split('/');
    this.id.set(this.rutaActiva.snapshot.params['id']);

    this.title.set(url[3]);

    if (url[3] != 'agregar') {
      this.store
        .pipe(select(fromTag.selectLoading))
        .subscribe((state) => this.loading.set(state));
      this.store.dispatch(new fromTag.ReadById(this.id()));

      this.store
        .pipe(select(fromTag.selectTag))
        .subscribe((data) => this.category.set(data));
    }
  }

  save(form: NgForm): void {
    if (form.valid) {
      this.store
        .pipe(select(fromTag.selectLoading))
        .subscribe((state) => this.loading.set(state));

      const tagRequest: fromTag.TagRequest = {
        name: form.value.name,
        description: form.value.description,
      };

      if (this.title() != 'agregar') {
        this.store.dispatch(new fromTag.Update(this.id(), tagRequest));
      } else {
        this.store.dispatch(new fromTag.Create(tagRequest));
      }
    }
  }
}
