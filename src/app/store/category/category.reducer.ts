import { CategoryState } from "@store/states/category.state";
import * as fromActions from "./category.actions";

//ESTADO INICIAL
export const initialState: CategoryState = {
  loading: false,
  category: null,
  categories: [],
  id: null,
  error: null
}

export function categoryReducer( _state: CategoryState = initialState, action: fromActions.All | any ) {
  switch(action.type){
    case fromActions.Types.CREATE: {
      return { ..._state, loading: true, error: null }
    }
    case fromActions.Types.CREATE_SUCCESS: {
      return { ..._state, loading: false, error: null, category: action.category }
    }
    case fromActions.Types.CREATE_ERROR: {
      return { ..._state, loading: false, error: action.error }
    }

    case fromActions.Types.READ: {
      return { ..._state, loading: true, error: null }
    }
    case fromActions.Types.READ_SUCCESS: {
      return { ..._state, loading: false, error: null, categories: action.categories }
    }
    case fromActions.Types.READ_ERROR: {
      return { ..._state, loading: false, error: action.error }
    }

    case fromActions.Types.READ_BY_ID: {
      return { ..._state, loading: true, error: null }
    }
    case fromActions.Types.READ_BY_ID_SUCCESS: {
      return { ..._state, loading: false, error: null, category: action.category }
    }
    case fromActions.Types.READ_BY_ID_ERROR: {
      return { ..._state, loading: false, error: action.error }
    }

    case fromActions.Types.UPDATE: {
      return { ..._state, loading: true, error: null }
    }
    case fromActions.Types.UPDATE_SUCCESS: {
      return { ..._state, loading: false, error: null, category: action.category }
    }
    case fromActions.Types.UPDATE_ERROR: {
      return { ..._state, loading: false, error: action.error }
    }

    case fromActions.Types.DELETE: {
      return { ..._state, loading: true, error: null }
    }
    case fromActions.Types.DELETE_SUCCESS: {
      return { ..._state, loading: false, error: null, category: action.category }
    }
    case fromActions.Types.DELETE_ERROR: {
      return { ..._state, loading: false, error: action.error }
    }


    default: {
      return _state;
    }

  }
}


