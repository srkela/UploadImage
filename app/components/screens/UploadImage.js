import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import ImagePicker from "react-native-image-crop-picker";
import * as appActions from "../../redux/actions";

const UploadImage = () => {
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();

  const pickImage = async () => {
    try {
      const pickedImage = await ImagePicker.openPicker({
        width: 150,
        height: 200,
        cropping: true,
      });
      if (pickedImage.canceled) return;
      setImage(pickedImage);
    } catch (err) {
      // add logger here instead of console.log()
      // eslint-disable-next-line no-console
      console.log({ err });
    }
  };
  return (
    <View style={styles.buttonWrapper}>
      <TouchableOpacity onPress={pickImage} testID={"pick-button"}>
        <Text style={styles.button}>Pick Image</Text>
      </TouchableOpacity>
      {image && (
        <>
          <Image
            source={{ uri: image.path }}
            style={{ height: 200, width: 150, backgroundColor: "gray", marginTop: 20 }}
          />
          <TouchableOpacity
            onPress={() => {
              dispatch(appActions.uploadImage(image));
            }}
          >
            <Text style={styles.button}>Upload Image</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default UploadImage;

const styles = StyleSheet.create({
  buttonWrapper: {
    alignItems: "center",
    marginTop: 150,
  },
  button: {
    fontSize: 30,
  },
});
