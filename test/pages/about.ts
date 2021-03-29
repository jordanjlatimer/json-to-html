import { body, div, head, html, p } from "../../dist";
import { Page } from "../../dist/slamInterfaces";
import { StyledDiv } from "./components/StyledDiv";

export const About: Page = {
  name: "about",
  html: html(head(), body(div(p("Hello Universe")), StyledDiv("Jimmy"))),
};
