import React from "react";
import { render } from "@testing-library/react";

import App from "./App";

test("should render app component", () => {
    const { getByText } = render(<App />)
    expect(getByText(/hello world/i)).toBeTruthy();
});
