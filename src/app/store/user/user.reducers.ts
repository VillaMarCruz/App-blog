import * as fromActions from './user.actions';
import { UserState } from "@store/states/user.state";

//ESTADO INICIAL
export const initialState: UserState = {
  entity: null,
  token: null,
  loading: false,
  error: null
}

export function userReducer(state = initialState, action: fromActions.All | any) {
  switch(action.type){
    case fromActions.Types.INIT: {
      return {...state, loading: true};
    }
    case fromActions.Types.INIT_AUTHORIZED: {
      return {...state, loading: false, entity: action.user, error: null};
    }
    case fromActions.Types.INIT_ERROR: {
      return {...state, loading: false, entity:null,  error: action.error};
    }
    case fromActions.Types.INIT_UNAUTHORIZED: {
      return {...state, loading: false, entity:null,  error: null};
    }

    case fromActions.Types.SIGIN_IN_EMAIL: {
      return {...state, loading:true, token: null,  error: null}
    }
    case fromActions.Types.SIGIN_IN_EMAIL_SUCCESS: {
      return {...state, loading:false, token: action.token,  error: null}
    }
    case fromActions.Types.SIGIN_IN_EMAIL_ERROR: {
      return {...state, loading:false, token: null,  error: action.error}
    }

    //SALIR DE SESION
    case fromActions.Types.SIGIN_OUT_EMAIL: {
      return {...initialState}
    }
    case fromActions.Types.SIGIN_OUT_EMAIL_SUCCESS: {
      return {...initialState}
    }
    case fromActions.Types.SIGIN_OUT_EMAIL_ERROR: {
      return {...state, loading:false, entity: null,  error: action.error}
    }

    default: {
      return state;
    }
  }
}
