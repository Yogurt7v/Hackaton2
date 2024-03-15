const initialState = {
  isOpenModal: false,
  textForModal: "",
  userPage: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_IS_OPEN_MODAL": {
      return {
        ...state,
        isOpenModal: action.payload,
      };
    }
    case "SET_TEXT_FOR_MODAL": {
      return {
        ...state,
        textForModal: action.payload,
      };
    }
    case "SET_USER_PAGE": {
      return {
        ...state,
        userPage: action.payload,
      };
    }

    default:
      return state;
  }
};
