import ReactShallowRenderer from "react-test-renderer/shallow";
import Header from "../../components/Header";
import React from "react";

test("should render header ccorrectly", () => {
  const renderer = new ReactShallowRenderer();
  renderer.render(<Header />);
  console.log(renderer.getRenderOutput());
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
