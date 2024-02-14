import { ActionReducerMap } from '@ngrx/store';

import { UserState } from '@store/states/user.state';
import { CategoryState } from '@store/states/category.state';
import { TagState } from '@store/states/tag.state';

import { UserEffects, userReducer } from '@store/user';
import { CategoryEffects, categoryReducer } from '@store/category';
import { TagEffects, tagReducer } from '@store/tag';

export interface AppState {
  users: UserState;
  categories: CategoryState;
  tags: TagState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  users: userReducer,
  categories: categoryReducer,
  tags: tagReducer,
};

export const ROOT_EFFECTS = [UserEffects, CategoryEffects, TagEffects];
