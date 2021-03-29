import { html, head, body, div, p, a } from "../../dist";
import { Page } from "../../dist/slamInterfaces";
import { About } from "./about";
import { StyledDiv } from "./components/StyledDiv";

const Index: Page = {
  name: "index",
  html: html(head(), body(div(p("Hello World")), StyledDiv("Hello"), a({ href: "about" }, "about"))),
};

export default [Index, About];
