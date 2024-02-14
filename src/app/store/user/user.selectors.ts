import { createSelector } from "@ngrx/store";
import { AppState } from "@store/app.state";
import { UserState } from "@store/states/user.state";

// SELECTOR QUE TIENE RELACIÓN CON LA PROPIEDAD
export const selectUserFeature = (state: AppState) => state.users;

export const selectUser = createSelector(
  selectUserFeature,
  (state: UserState) => state.entity
);

export const selectLoading = createSelector(
  selectUserFeature,
  (state: UserState) => state.loading
);

export const getIsAuthorized = createSelector(
  selectUserFeature,
  (state: UserState) => state.entity?.roleEntity
);
