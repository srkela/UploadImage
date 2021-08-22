import ACTIONS from "../../constants/ACTIONS";

const initialState = {
  image: undefined,
  uploadError: "",
};

export default function uploadReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.UPLOAD_IMAGE: {
      return {
        ...state,
        image: action.payload,
      };
    }
    case ACTIONS.UPLOAD_ERROR: {
      return {
        ...state,
        uploadError: action.payload,
      };
    }

    default:
      return { ...state };
  }
}
