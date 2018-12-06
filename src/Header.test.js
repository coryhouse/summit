import React from "react";
import Header from "./Header";
import renderer from "react-test-renderer";

it("renders Summit in header by default", () => {
  const tree = renderer.create(<Header />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders the company name passed", () => {
  const tree = renderer.create(<Header companyName="Test company" />).toJSON();
  expect(tree).toMatchSnapshot();
});
