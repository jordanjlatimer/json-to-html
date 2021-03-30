import { CSS, div } from "../../../dist";

export const Box = () => {
  const classes = CSS({
    root: {
      height: "200px",
      backgroundColor: "green",
    },
    t1: {
      backgroundColor: "blue",
    },
    t2: {
      backgroundColor: "red",
    },
  });

  return div(
    { css: classes.root },
    "Hello World",
    div({ css: classes.t1 }, "Hello Again"),
    div({ css: classes.t2 }, "Goodbye")
  );
};
