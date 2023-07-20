interface State {
  token?: string;
  user?: User;
}

const initialState: State = {};

export enum AuthActions {
  SetToken = "SET_TOKEN",
  DelToken = "DEL_TOKEN",
  SetStoreData = "SET_STORE_DATA",
}
// el initial state se pone para empezar los estados, las acciones son lo que modifican los estados
const reducer = (
  state: State = initialState,
  { type, payload }: { type: AuthActions; payload: any }
): State => {
  switch (type) {
    case AuthActions.SetToken:
      return { ...state, token: payload };
    case AuthActions.SetStoreData:
      return { ...state, user: payload };
    case AuthActions.DelToken:
      return { ...state, token: undefined };
    default:
      return state;
  }
};

export default reducer;
