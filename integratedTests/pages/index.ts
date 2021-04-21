import { body, Slam, head, html, title, div } from "../../dist";
import { Component } from "./components/Component";
import { StyleApplier } from "./components/StyleApplier";

export const Index = Slam.page((content: string) => {
  return html(
    head(
      title("Test")
    ),
    body(
      Component("Component"),
      Component("Child1", "Child2"),
      StyleApplier(
        Component("Component With Red Text")
      ), 
      Component(content)
    )
  );
});
