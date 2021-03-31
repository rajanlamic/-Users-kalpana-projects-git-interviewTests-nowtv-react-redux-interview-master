import MEMBER from '../constants/member';
import memberReducer from './member';

describe('member reducer', () => {
  let initialState;
  beforeEach(() => {
    initialState = {
      isPending: false,
      isSuccess: false,
      isFail: false,
    }
  })

  it('returns the initial state', () => {
    expect(memberReducer(undefined, {})).toEqual(initialState);
  });

  it('handles pending request', () => {
    expect(memberReducer(initialState, { type: MEMBER.PENDING })).toEqual({
      ...initialState,
      isPending: true,
    });
  });

  it('handles success response', () => {
    expect(memberReducer(initialState, { type: MEMBER.SUCCESS, payload: [{ member: 'test member' }] })).toEqual({
      ...initialState,
      isSuccess: true,
      data: [{ member: 'test member' }]
    });
  });

  it('handles errors', () => {
    expect(memberReducer(initialState, { type: MEMBER.FAIL, payload: [{ member: 'error member' }] })).toEqual({
      ...initialState,
      isFail: true,
      error: [{ member: 'error member' }]
    });
  });

});
