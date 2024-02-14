import { createSelector } from "@ngrx/store";
import { CategoryState } from "@store/states/category.state";
import { AppState } from "@store/app.state";

// SELECTOR QUE TIENE RELACIÓN CON LA PROPIEDAD
export const selectCategoryFeature = (state: AppState) => state.categories;

export const selectListCategories = createSelector(
  selectCategoryFeature,
  (state: CategoryState) => state.categories
);

export const selectCategory = createSelector(
  selectCategoryFeature,
  (state: CategoryState) => state.category
)

export const selectLoading = createSelector(
  selectCategoryFeature,
  (state: CategoryState) => state.loading
);
