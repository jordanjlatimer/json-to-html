import { body, CSS, head, html, title } from "../../dist";
import { Box } from "./components/Box";

export const Home = async () => {
  const classes = CSS({
    root: {
      backgroundColor: "green",
    },
  });
  const js = () => console.log("Hello");
  return {
    name: "home",
    html: html({ css: classes.root, js: js }, head(title("Test")), body(Box())),
    cssReset: true,
  };
};
