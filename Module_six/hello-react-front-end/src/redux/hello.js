import axios from 'axios';

const API_URL = 'http://localhost:3000/api/v1/messages';

async function getGreetingFromAPI() {
  const answer = await axios.get(API_URL);
  return answer.data;
}

export const GET_HELLO = 'GET_HELLO';

const greetingReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case GET_HELLO: {
      return { greeting: action.payload.message };
    }
    default: {
      return state;
    }
  }
};

export default greetingReducer;

export const getHello = (data) => ({
  type: GET_HELLO,
  payload: data,
});

export const getHelloDispatcher = () => async (dispatch) => {
  const hello = getHello(await getGreetingFromAPI());
  dispatch(hello);
};
