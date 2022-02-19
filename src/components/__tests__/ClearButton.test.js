import React from "react";
import TestRenderer from "react-test-renderer";
import { ClearButton } from "../ClearButton";

it("successful renders the component", () => {
    const component = TestRenderer.create(
        <ClearButton
            loading={"false"}
        />
    );

    expect(component).toMatchSnapshot();
});
