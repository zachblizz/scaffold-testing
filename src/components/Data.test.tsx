import axios from "axios";
import React from "react";
import { render, waitFor, waitForElementToBeRemoved } from "@testing-library/react";

import Data from "./Data";

jest.mock("axios");

function setup(data?: any) {
    if (data) {
        axios.get = jest.fn().mockResolvedValueOnce({ status: 200, data });
    }

    return render(<Data />);
}

describe("Data tests", () => {
    it("should render 'loading' first", () => {
        const { getByText } = setup();
        expect(getByText(/loading/i)).toBeInTheDocument();
    });

    it("should render data", async () => {
        const data = { hello: "world" };
        const { getByText, container } = setup(data);

        // Should see loading initially
        const loading = getByText(/loading/i);
        await waitFor(() => expect(loading).toBeInTheDocument());
        // Should have the pre tag in the document
        await waitFor(() =>
            expect(container.querySelector("pre")).toBeInTheDocument()
        );
    });
});
