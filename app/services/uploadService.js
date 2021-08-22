import axios from "axios";

export default { uploadImage };

function uploadImage(image) {
  const formData = new FormData();

  formData.append("upload_image", {
    name: "picture.jpg",
    type: "image.jpg",
    uri: image.path,
  });

  return axios.post("(https://imagehasbeenverified.example.endpoint)", formData);
}
