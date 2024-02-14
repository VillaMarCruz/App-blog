import { UserResponse } from "@store/user/user.models";

export interface UserState {
  entity:   UserResponse | null,
  token:    string | null;
  loading:  boolean;
  error:    string | null;
}
