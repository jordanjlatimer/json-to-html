import { body, CSS, head, html, title } from "../../dist";
import { Box } from "./components/Box";

export const Home = (content: any) => {
  const classes = CSS({
    root: {
      backgroundColor: "green",
    },
  });
  const js = () => console.log("Hello");
  return html({ css: classes.root, js: js }, head(title("Test")), body(Box(), content.name));
};
