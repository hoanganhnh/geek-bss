import * as React from "react";

import { autoLogout } from "@/utils/auth.util";
import {
  getDataStorage,
  removeDataFromLocalStorage,
} from "@/utils/local-storage";
import { USER_DATA } from "@/constants";
import { User } from "@/interfaces/user.interface";

type AuthenticateSateContextType = {
  user: Partial<User> | null;
};

type AuthenticateDispatchContextType = React.Dispatch<{
  type: "login" | "logout";
  payload: Partial<User>;
}>;

const userInfo = (getDataStorage(USER_DATA) as Partial<User>) || null;

const AuthenticateStateContext =
  React.createContext<AuthenticateSateContextType>({ user: userInfo });
AuthenticateStateContext.displayName = "AuthenticateSateContext";

const AuthenticateDispatchContext =
  React.createContext<AuthenticateDispatchContextType>(() => {});
AuthenticateDispatchContext.displayName = "AuthenticateDispatchContext";

function authenReducer(
  state: { user: Partial<User> | null },
  action: { type: "login" | "logout"; payload: Partial<User> | null }
) {
  switch (action.type) {
    case "login":
      return { user: action.payload };
    case "logout":
      return {
        user: null,
      };
    default:
      return state;
  }
}

export function AuthenticateProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = React.useReducer(authenReducer, {
    user: userInfo,
  });
  return (
    <AuthenticateStateContext.Provider value={state}>
      <AuthenticateDispatchContext.Provider value={dispatch}>
        {children}
      </AuthenticateDispatchContext.Provider>
    </AuthenticateStateContext.Provider>
  );
}

function useAuthenState() {
  const context = React.useContext(AuthenticateStateContext);

  if (!context) {
    throw Error("useAuthen must use with AuthenticateContext");
  }
  return context;
}

function useAuthenDispatch() {
  const context = React.useContext(AuthenticateDispatchContext);

  if (!context) {
    throw Error("useAuthenDispatch must use with AuthenticateDispatchContext");
  }
  return context;
}

export function useUser() {
  const { user } = useAuthenState();
  const dispatch = useAuthenDispatch();

  const setUser = React.useCallback(
    (userData: Partial<User>) => {
      dispatch({ type: "login", payload: userData });
    },
    [dispatch]
  );

  const logoutUser = React.useCallback(async () => {
    // @ts-ignore
    dispatch({ type: "logout", payload: null });
    removeDataFromLocalStorage(USER_DATA);
    await autoLogout();
  }, [dispatch]);

  const isAuthen = React.useMemo(() => !!user, [user]);

  return { user, setUser, logoutUser, isAuthen };
}
