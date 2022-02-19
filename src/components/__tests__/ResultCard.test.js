import React from "react";
import TestRenderer from "react-test-renderer";
import { ResultCard } from "../ResultCard";

it("successful renders the component", () => {
    const component = TestRenderer.create(
            <ResultCard
                name={"Ana Banana"}
                count={50000234}
                description={"A really fun app!"}
                avatar={"https://fake.com/photoUrl"}
                repoURL={"https://fake.com"}
                createdAt={"2017-09-27T15:31:23Z"}
            />
    );

    expect(component).toMatchSnapshot();
});
