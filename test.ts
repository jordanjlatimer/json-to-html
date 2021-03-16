import { TypedSlamElement } from "./dist/baseInterfaces";
import { body, div, head, html, title } from "./dist/elementFunctions";
import { CreateComponent, CreateElement, CreatePage } from "./dist/page";
import { Jackson } from "./test2";
import * as ts from "typescript"

const Index = CreatePage("index");

const Hello = CreateComponent((element: TypedSlamElement) => ({
  html: div(element),
  css: {
    backgroundColor: "gray",
    ":hover": {
      transform: "scale(1.5)",
    },
  },
}));

const GoodBye = CreateComponent({
  html: div("Goodbye"),
  css: {
    backgroundColor: "red",
  },
});

const Jimmy = CreateElement((id: string) => ({
  tag: "div",
  atts: { id: id },
}));

Index.html = html(
  head(title("Test")),
  body(div("Hello World"), Hello(div("Hello World")), Hello(div("Hello Again")), GoodBye, Jimmy("jimmy"), Jackson)
);

Index.buildAll();

Index.writeFiles();
