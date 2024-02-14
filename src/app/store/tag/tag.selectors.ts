import { createSelector } from '@ngrx/store';
import { AppState } from '@store/app.state';
import { TagState } from '@store/states/tag.state';

export const selectTagFeature = (state: AppState) => state.tags;

export const selectListTags = createSelector(
  selectTagFeature,
  (state: TagState) => state.tags
);

export const selectTag = createSelector(
  selectTagFeature,
  (state: TagState) => state.tag
);

export const selectLoading = createSelector(
  selectTagFeature,
  (state: TagState) => state.loading
);
