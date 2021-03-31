import MEMBER from "../constants/member";

const defaultProps = {
  isPending: false,
  isSuccess: false,
  isFail: false
};

const memberReducer = (state = defaultProps, action) => {
  const { type, payload } = action;
  switch (type) {
    case MEMBER.PENDING:
      return {
        ...state,
        isPending: true,
        isSuccess: false,
        isFail: false,
      };
    case MEMBER.SUCCESS:
      return {
        ...state,
        isPending: false,
        isSuccess: true,
        isFail: false,
        data: payload,
      };
    case MEMBER.FAIL:
      return {
        ...state,
        isPending: false,
        isSuccess: false,
        isFail: true,
        error: payload,
      };
    default:
      return state;
  }
};

export default memberReducer;
