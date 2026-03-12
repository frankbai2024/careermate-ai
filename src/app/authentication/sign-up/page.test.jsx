import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from "./page";
import SignUpPage from "./page";
import { vi, describe, test, expect } from "vitest";
//if in a test, mock out the router by mocking the next/router's useRouter() hook
vi.mock("next/navigation");

describe('Form', async () => {
  test('renders sign up form', () => {
    render(<SignUpPage />);

    expect(screen.getByRole('textbox', { name: "Full Name" })).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: "Email" })).toBeInTheDocument();
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Create Account" })).toBeInTheDocument();
  });

  test('render error message when input is invalid after form submission', async () => {
    const user = userEvent.setup();

    render(
      <Form

      />
    );
    await user.click(screen.getByRole("button", { name: "Create Account" }));

    expect(screen.getByText("Please enter your full name")).toBeInTheDocument();
    expect(screen.getByText("Please enter your email")).toBeInTheDocument();
    expect(screen.getByText("Please enter your password")).toBeInTheDocument();

  });
});