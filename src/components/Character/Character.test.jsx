import { screen, render } from "@testing-library/react";
import Character from "./Character";

it("should render the Charater component", () => {
  const { container } = render(
    <Character head="bird" middle="fancy" pants="blue" />
  );

  // const head = screen.getByLabelText(/head/);
  // const middle = screen.getByLabelText(/middle/);
  // const pants = screen.getByLabelText(/pants/);

  // expect(head).toHaveStyle(`background-image: url(./bird-head.png)`);
  // expect(middle).toHaveStyle(`background-image: url(./fancy-middle.png)`);
  // expect(pants).toHaveStyle(`background-image: url(./blue-pants.png)`);

  expect(container).toMatchSnapshot();
});
