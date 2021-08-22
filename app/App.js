/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
// eslint-disable-next-line no-duplicate-imports
import type { Node } from "react";
import { Provider } from "react-redux";

import UploadImage from "./components/screens/UploadImage";
import store from "./redux/store";

const App: () => Node = () => {
  return (
    <Provider store={store}>
      <UploadImage />
    </Provider>
  );
};

export default App;
