import { TagState } from '@store/states/tag.state';
import * as fromActions from './tag.actions';

// TODO: Estado Inicial
export const initialState: TagState = {
  loading: false,
  tag: null,
  tags: [],
  id: null,
  error: null,
};

export function tagReducer(
  _state: TagState = initialState,
  action: fromActions.All | any
) {
  switch (action.type) {
    case fromActions.Types.CREATE: {
      return { ..._state, loading: true, error: null };
    }
    case fromActions.Types.CREATE_SUCCESS: {
      return { ..._state, loading: false, error: null, tag: action.tag };
    }
    case fromActions.Types.CREATE_ERROR: {
      return { ..._state, loading: false, error: action.error };
    }

    case fromActions.Types.READ: {
      return { ..._state, loading: true, error: null };
    }
    case fromActions.Types.READ_SUCCESS: {
      return { ..._state, loading: false, error: null, tags: action.tags };
    }
    case fromActions.Types.READ_ERROR: {
      return { ..._state, loading: false, error: action.error };
    }

    case fromActions.Types.READ_BY_ID: {
      return { ..._state, loading: true, error: null };
    }
    case fromActions.Types.READ_BY_ID_SUCCESS: {
      return { ..._state, loading: false, error: null, tag: action.tag };
    }
    case fromActions.Types.READ_BY_ID_ERROR: {
      return { ..._state, loading: false, error: action.error };
    }

    case fromActions.Types.UPDATE: {
      return { ..._state, loading: true, error: null };
    }
    case fromActions.Types.UPDATE_SUCCESS: {
      return { ..._state, loading: false, error: null, tag: action.tag };
    }
    case fromActions.Types.UPDATE_ERROR: {
      return { ..._state, loading: false, error: action.error };
    }

    case fromActions.Types.DELETE: {
      return { ..._state, loading: true, error: null };
    }
    case fromActions.Types.DELETE_SUCCESS: {
      return { ..._state, loading: false, error: null, tag: action.tag };
    }
    case fromActions.Types.DELETE_ERROR: {
      return { ..._state, loading: false, error: action.error };
    }

    default:
      return _state;
  }
}
