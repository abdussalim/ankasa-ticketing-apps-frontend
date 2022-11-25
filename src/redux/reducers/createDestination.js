import {
  CREATE_DESTINATION_PENDING,
  CREATE_DESTINATION_SUCCESS,
} from "../actions/types";

const initialState = {
  airlines: [],
  isLoading: false,
  pagination: {
    currentPage: 0,
    limit: 0,
    totalData: 0,
    totalPage: 0,
  },
  error: null,
};

const createDestinationsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_DESTINATION_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case CREATE_DESTINATION_SUCCESS:
      return {
        ...state,
        airlines: payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default createDestinationsReducer;
