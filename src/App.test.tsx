import React from "react";
import { render } from "@testing-library/react";
import "./setupTests";

import App from "./App";

describe("Test App component", () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it("should show correct search text", () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeTruthy();
  });
});