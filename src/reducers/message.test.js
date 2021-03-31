import MESSAGE from '../constants/message';
import messageReducer from './message';

describe('message reducer', () => {
  let initialState;
  beforeEach(() => {
    initialState = {
      isPending: false,
      isSuccess: false,
      isFail: false,
    }
  })

  it('returns the initial state', () => {
    expect(messageReducer(undefined, {})).toEqual(initialState);
  });

  it('handles pending request', () => {
    expect(messageReducer(initialState, { type: MESSAGE.PENDING })).toEqual({
      ...initialState,
      isPending: true,
    });
  });

  it('handles success response', () => {
    expect(messageReducer(initialState, { type: MESSAGE.SUCCESS, payload: [{ message: 'test message' }] })).toEqual({
      ...initialState,
      isSuccess: true,
      data: [{ message: 'test message' }]
    });
  });

  it('handles errors', () => {
    expect(messageReducer(initialState, { type: MESSAGE.FAIL, payload: [{ message: 'error message' }] })).toEqual({
      ...initialState,
      isFail: true,
      error: [{ message: 'error message' }]
    });
  });

});
