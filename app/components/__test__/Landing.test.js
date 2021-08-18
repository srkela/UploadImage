import React from "react";
import { render } from "@testing-library/react-native";
import Landing from "../screens/Landing";

describe("Landing page should render with title", () => {
  it("should render title element", function() {
    const { getByTestId } = render(<Landing />);
    getByTestId("title");
  });
});
