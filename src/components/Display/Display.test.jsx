import { screen, render } from "@testing-library/react";
import Display from "./Display";

it("should render the Display component", () => {
  const { container } = render(
    <Display library={["hurrumph!", "riiilly?", "ahhyooogaah!"]} />
  );

  expect(container).toMatchSnapshot();
});
