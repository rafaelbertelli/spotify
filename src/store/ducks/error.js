/** TYPES */
const Types = {
  SET: 'error/SET',
  HIDE: 'error/HIDE',
};

/** REDUCERS */
const INITIAL_STATE = {
  visible: false,
  message: null,
};

export default function error(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SET:
      return {
        ...state,
        visible: true,
        message: action.payload.message,
      };

    case Types.HIDE:
      return {
        ...state,
        visible: false,
        message: null,
      };

    default:
      return state;
  }
}

/** ACTIONS */
export const Creators = {
  setError: message => ({
    type: Types.SET,
    payload: { message },
  }),

  hideError: () => ({
    type: Types.HIDE,
  }),
};
