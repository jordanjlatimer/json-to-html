import { body, Slam, head, html, title } from "../../dist";
import { Box } from "./components/Box";
import { StyledDiv } from "./components/StyledDiv";

export const Home = Slam.page((content: any) => {
  const classes = Slam.styles({
    root: {
      backgroundColor: "lightgray",
    },
  });
  const js = () => console.log("Hello");
  return html({ css: classes.root, js: js }, head(title("Test")), body(Box("gray"), StyledDiv({class: "Hello"},"Hello", "Goodbye")));
});
