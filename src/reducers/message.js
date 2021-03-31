import MESSAGE from "../constants/message";

const defaultProps = {
  isPending: false,
  isSuccess: false,
  isFail: false
};

const messageReducer = (state = defaultProps, action) => {
  const { type, payload } = action;
  switch (type) {
    case MESSAGE.PENDING:
      return {
        ...state,
        isPending: true,
        isSuccess: false,
        isFail: false
      };
    case MESSAGE.SUCCESS:
      return {
        ...state,
        isPending: false,
        isSuccess: true,
        isFail: false,
        data: payload
      };
    case MESSAGE.FAIL:
      return {
        ...state,
        isPending: false,
        isSuccess: false,
        isFail: true,
        error: payload
      };
    default:
      return state;
  }
};

export default messageReducer;
