import ACTIONS from "../../constants/ACTIONS";
import upload from "../../services/uploadService";
import UPLOAD_ERROR from "../../constants/MESSAGES";

export { uploadImage };

function uploadImage(img) {
  return async (dispatch) => {
    try {
      const image = await upload.uploadImage(img);
      dispatch({
        type: ACTIONS.UPLOAD_IMAGE,
        payload: image,
      });
    } catch (err) {
      // add logger here instead of console.log
      // eslint-disable-next-line no-console
      console.log({ err });
      dispatch({
        type: ACTIONS.UPLOAD_ERROR,
        payload: UPLOAD_ERROR,
      });
    }
  };
}
