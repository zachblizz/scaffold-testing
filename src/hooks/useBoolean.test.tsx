import React from "react";
import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";

import { useBoolean, UseBoolean } from "./useBoolean";

type Setup = [] | UseBoolean;

// Setup the test for custom hook unit test
function setup(defaultValue: boolean = false): Setup {
    const returnVal: Setup = [];

    function Comp(): null {
        Object.assign(returnVal, useBoolean(defaultValue));

        return null;
    }

    render(<Comp />);
    return returnVal;
}

test("should initialize useBoolean with false", () => {
    const [result] = setup();
    expect(result).toBeFalsy();
});

test("should initialize useBoolean with true", () => {
    const [result] = setup(true);
    expect(result).toBeTruthy();
});

test("should update result to false when 'off' is called", () => {
    const bool = setup(true);

    expect(bool[0]).toBeTruthy();
    // Act on 'off' call
    act(bool[1].off);
    // Result should be false now
    expect(bool[0]).toBeFalsy();
});

test("should update result to false when 'on' is called", () => {
    const bool = setup();

    expect(bool[0]).toBeFalsy();
    // Act on 'on' call
    act(bool[1].on);
    // Result should be true now
    expect(bool[0]).toBeTruthy();
});

test("should toggle between false and true when 'toggle' is called multiple times", () => {
    const bool = setup();

    expect(bool[0]).toBeFalsy();
    // Act on 'toggle' call
    act(bool[1].toggle);
    // Result should be true now
    expect(bool[0]).toBeTruthy();

    // Act on 'toggle' call again
    act(bool[1].toggle);
    // Result should be true now
    expect(bool[0]).toBeFalsy();
});
