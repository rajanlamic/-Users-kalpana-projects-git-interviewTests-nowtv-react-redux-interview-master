import MESSAGE from '../constants/message';
import { getMessages } from '../data/index';

export const getMessage = () => (dispatch) => {
  dispatch({
    type: MESSAGE.PENDING,
  });

  getMessages()
    .then((payload) => {
      dispatch({
        type: MESSAGE.SUCCESS,
        payload,
      });
    })
    .catch((error) => {
      dispatch({
        type: MESSAGE.FAIL,
        payload: error,
      });
    });
};
