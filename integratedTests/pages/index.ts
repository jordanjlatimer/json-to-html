import { body, head, html, Slam, title } from "../../dist";
import { Component } from "./components/Component";
import { StyleApplier } from "./components/StyleApplier";

export const Index = Slam.page((content: string) => {

  const OverriddenComponent = Slam.styled.component(Component, {
    height: "100px",
    width: "100px"
  })

  return html(
    head(
      title("Test")
    ),
    body(
      Component("Component"),
      Component("Child1", 0.75, "Child2"),
      StyleApplier(
        Component("Component With Red Text")
      ), 
      Component(content),
      OverriddenComponent("Child1", 0.5, "Child2")
    )
  );
});
