import { CreatePage, html, head, body, div, p } from "../../dist";
import { StyledDiv } from "./components/StyledDiv";

const Index = CreatePage({
  name: "index",
  html: html(head(), body(div(p("Hello World")), StyledDiv("Hello"))),
});

export default Index;
