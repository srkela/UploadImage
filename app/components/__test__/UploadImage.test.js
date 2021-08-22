import React from "react";
import { render } from "@testing-library/react-native";
import UploadImage from "../screens/UploadImage";

describe("Landing screen should render with title", () => {
  it("should render title element", function() {
    const { getByTestId } = render(<UploadImage />);
    getByTestId("pick-button");
  });
});
