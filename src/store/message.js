// Actions
const SEND_MESSAGE = 'SEND_MESSAGE';
const GET_MESSAGES = 'GET_MESSAGES';

// Action Creators
export const sendMessage = (message) => ({
  type: SEND_MESSAGE,
  message,
});
export const getMessages = (messages) => ({
  type: GET_MESSAGES,
  messages,
});

const initialState = [];

// Reducer
export default function messageReducer(state = initialState, action) {
  switch (action.type) {
    case SEND_MESSAGE:
      return [...state, action.message];
    case GET_MESSAGES:
      return action.messages.messages;
    default:
      return state;
  }
}
