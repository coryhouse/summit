// Add snapshot test here.
import React from "react";
import ModelOutputs from "./ModelOutputs";
import renderer from "react-test-renderer";
import { modelInputs as modelInputsMock } from "../mockData";

it("should render an empty table when passed an empty array", () => {
  // arrange
  const modelInputs = [];

  // act
  const tree = renderer
    .create(<ModelOutputs modelInputs={modelInputs} />)
    .toJSON();

  // assert
  expect(tree).toMatchSnapshot();
});

it("should render a table with 2 rows when passed two rows", () => {
  // arrange
  const modelInputs = modelInputsMock;

  // act
  const tree = renderer
    .create(<ModelOutputs modelInputs={modelInputs} />)
    .toJSON();

  // assert
  expect(tree).toMatchSnapshot();
});
