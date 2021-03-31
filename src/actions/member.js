import MEMBER from '../constants/member';
import { getMembers } from '../data/index';

export const getMember = () => (dispatch) => {
  dispatch({
    type: MEMBER.PENDING,
  });

  getMembers()
    .then((payload) => {
      dispatch({
        type: MEMBER.SUCCESS,
        payload,
      });
    })
    .catch((error) => {
      dispatch({
        type: MEMBER.FAIL,
        payload: error,
      });
    });
};
