import React from "react";
import TestRenderer from "react-test-renderer";
import { Nav } from "../NavBar";

it("successful renders the component", () => {
    const component = TestRenderer.create(
        <Nav />
    );

    expect(component).toMatchSnapshot();
});
