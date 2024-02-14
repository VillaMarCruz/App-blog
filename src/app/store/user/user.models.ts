import { User } from "@models/user.response";
export { User as UserResponse } from "@models/user.response";

export interface UsernamePasswordCredentials {
  username:    string;
  password: string;
}

export interface UserRequest extends User {
  password: string;
}

export type UserCreateRequest = Omit<UserRequest, 'created_at' | 'updated_at'>;
