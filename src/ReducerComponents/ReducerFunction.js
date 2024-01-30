import { initialState } from "./Initialvalue";

export const Reducer = (oldState = initialState, action) => {
  let newState = oldState;
  switch (action.type) {
    case "GET_USER_DATA": {
      return [
        ...newState,
        ...action.payload
      
      ];
    }
    default:
      return newState;
  }
};
