import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

describe("Render Counter", () => {
  describe("Render Test", () => {
    render(<Counter />);
    const increaseBtn = screen.getByRole("button", { name: "+" });
    const decreaseBtn = screen.getByRole("button", { name: "-" });
    const countElement = screen.getByText(/0/i);

    it("should render Increase and Decrease button", () => {
      expect(increaseBtn).toBeVisible();
      expect(decreaseBtn).toBeVisible();
    });

    it("render Count number", () => {
      expect(countElement).toBeTruthy();
    });
  });

  describe("Event Test", () => {
    it("should be +1 after Increase btn click", async () => {
      render(<Counter />);
      const increaseBtn = screen.getByRole("button", { name: "+" });
      const countElement = screen.getByText(/0/i);

      fireEvent.click(increaseBtn);

      expect(countElement).toHaveTextContent("1");
    });

    it("should be -1 after decrease btn click", async () => {
      render(<Counter initialValue={5} />);
      const decreaseBtn = screen.getByRole("button", { name: "-" });
      const countElement = screen.getByText(/5/i);

      fireEvent.click(decreaseBtn);

      expect(countElement).toHaveTextContent("4");
    });

    it("should be not negative number", async () => {
      render(<Counter />);
      const decreaseBtn = screen.getByRole("button", { name: "-" });
      const countElement = screen.getByText(/0/i);

      fireEvent.click(decreaseBtn);

      expect(countElement).toHaveTextContent("0");
    });
  });
});
