import { body, SlamStyles, head, html, title, SlamPage } from "../../dist";
import { Box } from "./components/Box";

export const Home = SlamPage((content: any) => {
  const classes = SlamStyles({
    root: {
      backgroundColor: "green",
    },
  });
  const js = () => console.log("Hello");
  return html({ css: classes.root, js: js }, head(title("Test")), body(Box("gray"), content.name));
});
