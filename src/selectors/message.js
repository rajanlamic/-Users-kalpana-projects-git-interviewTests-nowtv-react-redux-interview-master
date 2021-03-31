import { createSelector } from 'reselect';

const selectMessage = (state) => state.message;
const selectMessageResponse = createSelector(selectMessage, (messageData) => messageData);

export default selectMessageResponse;
