import React from "react";
import { render } from "@testing-library/react";

import { Dummy } from "./Dummy";

test("Dummy renders 'haha' when show is true", () => {
    const { getByText } = render(<Dummy show={true} />);
    expect(getByText(/haha/i)).toBeInTheDocument();
});

test("Dummy should not render 'haha' when show is false", () => {
    const { queryByText } = render(<Dummy />);
    expect(queryByText(/haha/i)).not.toBeInTheDocument();
});

test("Dummy should render children component", () => {
    const { getByText } = render(
        <Dummy>
            <p>hello</p>
        </Dummy>
    );

    expect(getByText(/hello/i)).toBeInTheDocument();
});
