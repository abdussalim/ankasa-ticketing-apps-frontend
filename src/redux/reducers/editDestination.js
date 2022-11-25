import {
  EDIT_DESTINATION_PENDING,
  EDIT_DESTINATION_SUCCESS,
} from "../actions/types";

const initialState = {
  airlines: [],
  isLoading: false,
  error: null,
};

const editDestinationReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case EDIT_DESTINATION_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case EDIT_DESTINATION_SUCCESS:
      return {
        ...state,
        airlines: payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default editDestinationReducer;
