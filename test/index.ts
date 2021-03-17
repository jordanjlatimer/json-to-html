import { body, CreatePage, div, head, html } from "../dist";

const Index = CreatePage({
  name: "index",
  html: html(head(), body(div("Menu"))),
  css: {
    ">body>div": {
      width: "100%",
      backgroundColor: "red",
      padding: "20px",
    },
  },
});

export default Index;
