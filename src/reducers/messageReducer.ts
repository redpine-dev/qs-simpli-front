interface State {
  error: boolean;
  success: boolean;
}

const initialState: State = {
  error: false,
  success: false,
};

export enum MessageActions {
  SetError = "SET_ERROR",
  SetSuccess = "SET_SUCCESS",
}

const reducer = (
  state: State = initialState,
  { type, payload }: { type: MessageActions; payload: any }
): State => {
  switch (type) {
    case MessageActions.SetError:
      return { ...state, error: true, success: false };
    case MessageActions.SetSuccess:
      return { ...state, success: true, error: false };
    default:
      return state;
  }
};

export default reducer;
