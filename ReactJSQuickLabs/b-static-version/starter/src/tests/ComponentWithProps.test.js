import React from "react";
import { create } from "react-test-renderer";

import ComponentWithProps from "../Components/ComponentWithProps";

test.skip(`it should render the correct heading from props when a header prop is supplied`, () => {
    const testRenderer = create(
        <ComponentWithProps header={testHeader} />);
        const testInstance = testRenderer.root;
        expect(testInstance.findByType(`h1`).children).
        toContain(testHeader);
});

test(`it should render the correct number from props when a number prop is supplied`, () => {

    const testNumber = 1000;
    const testRenderer = create(
        <ComponentWithProps number={testNumber} />);
        const testInstance = testRenderer.root;
        const renderedParagraphs = testInstance.findAllByType(`p`);

        expect(renderedParagraphs[1].children).
        toContain(testNumber.toString());
});
