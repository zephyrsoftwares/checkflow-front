import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders learn react link", () => {});

jest.mock("../config/firebase", () => ({
  auth: () => ({
    signInWithEmailAndPassword: jest.fn(() =>
      Promise.resolve({ user: "mockUser" }),
    ),
  }),
}));
