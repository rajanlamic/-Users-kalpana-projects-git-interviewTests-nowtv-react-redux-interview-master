import { createSelector } from 'reselect';

const selectMember = (state) => state.member;
const selectMemberResponse = createSelector(selectMember, (memberData) => memberData);

export default selectMemberResponse;
