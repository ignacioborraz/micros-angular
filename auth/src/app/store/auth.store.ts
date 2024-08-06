import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { User } from '../interfaces/user';

type AuthState = {
  user: User;
  isOnline: boolean;
};

const initialState: AuthState = {
  isOnline: false,
  user: {
    _id: '',
    name: '',
    email: '',
    password: '',
    age: 0,
    avatar: '',
    role: '',
  },
};

export const AuthStore = signalStore(
  withState(initialState),
  withMethods((store) => ({
    setUser(data: User): void {
      patchState(store, (state) => ({
        ...state,
        user: {
          email: data.email,
          password: data.email,
        },
      }));
    },
  }))
);
