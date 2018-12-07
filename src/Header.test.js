import React from "react";
import Header from "./Header";
import renderer from "react-test-renderer";
import { render } from "react-testing-library";

it('renders a header that contains "Summit LLC" by default', () => {
  // arrange

  // act
  const { getByText } = render(<Header />);

  // assert
  getByText("Summit LLC");
});

it("renders a header that contains company name when passed via props", () => {
  // arrange

  // act
  const { getByText } = render(<Header companyName="Facebook" />);

  // assert
  getByText("Facebook");
});

it("renders Summit in header by default", () => {
  const tree = renderer.create(<Header />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders the company name passed", () => {
  const tree = renderer.create(<Header companyName="Test company" />).toJSON();
  expect(tree).toMatchSnapshot();
});
