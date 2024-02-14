import { Component, inject, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppState } from '@store/app.state';

import * as fromUser from '@store/user/index';
import { UserState } from '@store/states/user.state';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AdminHeaderComponent } from './components/admin-header/admin-header.component';
import { SpinnerComponent } from '@shared/indicators/spinner/spinner.component';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule, SidebarComponent, AdminHeaderComponent, SpinnerComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export default class DashboardComponent {
  //private store = inject(Store);

  constructor(private store: Store<AppState>) {}

  public user = signal<any>(null);
  public loading = signal<boolean>(false);
  //public role = signal<>();

  ngOnInit() {
    this.store.dispatch(new fromUser.Init());

    this.store.pipe(select(fromUser.selectLoading)).subscribe((data) => {
      this.loading.set(data);
    });

    this.store
      .pipe(select(fromUser.selectUser))
      .subscribe((data) => this.user.set(data));
  }
}
