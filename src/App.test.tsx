import React from "react";
import {
  render,
  screen,
  waitFor

} from "@testing-library/react";
import "./setupTests";

import App from "./App";
import userEvent from "@testing-library/user-event";

describe("Tests Collection Name", () => {

  it("Power", async () => {
    const { container } = render(<App />);

    userEvent.type(screen.getByRole("spinbutton"), "400");
    await waitFor(() => {
      expect(screen.getByLabelText("Power threshold")).toHaveValue(400);
    });

  });
  it("Search By Pokemon name", async () => {
    const { container,rerender,debug } = render(<App />);

    userEvent.type(screen.getByRole("textbox"), "Bulbasaur");

    await waitFor(() => {
      expect(screen.getByTestId("pokemon-name")).toHaveValue("Bulbasaur");
     
    });

   
  });
});


