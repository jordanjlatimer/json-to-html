import { body, head, html, Slam, title } from "../../dist";
import { Component } from "./components/Component";
import { StyleApplier } from "./components/StyleApplier";

const consumer = (content: string) => {
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
}

export const FastBuild = Slam.page({
  content: {
    getter: () => new Promise(resolve => setTimeout(() => resolve("content"), 500)),
    consumer: consumer
  },
  cssReset: true,
  globalStyles: {
    "@import": "https://fonts.googleapis.com/css2?family=Dela+Gothic+One&display=swap",
    div: {
      fontFamily: "Dela Gothic One",
    },
  },
});