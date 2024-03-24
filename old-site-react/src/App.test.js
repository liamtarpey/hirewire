import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders some Hirewire text", () => {
  render(<App />);
  const element = screen.getByText(/Hirewire/i);
  expect(element).toBeInTheDocument();
});
