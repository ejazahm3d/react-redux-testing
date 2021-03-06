import React from "react";
import CommentBox from "components/CommentBox";
import { mount } from "enzyme";

let wrapped;

beforeEach(() => {
  wrapped = mount(<CommentBox />);
});

afterEach(() => {
  wrapped.unmount();
});

it("has a text area and a button", () => {
  expect(wrapped.find("textarea").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(1);
});

it("has a textarea that users can type in", () => {
  wrapped.find("textarea").simulate("change", {
    target: { value: "new comment" }
  });
  wrapped.update();
});
