import { screen, render } from "@testing-library/react";
import Picker from "./Picker";

it("should render the Picker component", () => {
  const { container } = render(<Picker />);

  const selectHead = screen.getByLabelText(/Head/);
  const selectMiddle = screen.getByLabelText(/Middle/);
  const selectPants = screen.getByLabelText(/Pants/);
  const selectPhrase = screen.getByLabelText(/New Phrase:/);

  expect(selectHead).toBeInTheDocument();
  expect(selectMiddle).toBeInTheDocument();
  expect(selectPants).toBeInTheDocument();
  expect(selectPhrase).toBeInTheDocument();

  expect(container).toMatchSnapshot();
});
