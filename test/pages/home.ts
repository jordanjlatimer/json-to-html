import { body, CSS, div, head, html, title } from "../../dist";

const Home = async () => {
  const classes = CSS({
    root: {
      backgroundColor: "green",
    },
  });
  const js = () => console.log("Hello");
  return {
    name: "home",
    html: html({ css: classes.root, js: js }, head(title("Test")), body(div("Hello World"))),
    cssReset: true,
  };
};

export default Home;
