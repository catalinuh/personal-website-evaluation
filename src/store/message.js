// Action
const SEND_MESSAGE = 'SEND_MESSAGE';

// Action Creator
export const sendMessage = (message) => ({
  type: SEND_MESSAGE,
  payload: message,
});

export const submitNewMessage = () => async (dispatch) => {
  const response = 'You sent a message!';

  dispatch(sendMessage(response));
};

// Reducer
export default function messageReducer(state = [], action) {
  switch (action.type) {
    case SEND_MESSAGE:
      return action.message;
    default:
      return state;
  }
}
