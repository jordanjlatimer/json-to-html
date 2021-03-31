import { SlamStyles, div, SlamComponent } from "../../../dist";

export const Box = SlamComponent((rootColor: string) => {
  const classes = SlamStyles({
    root: {
      height: "200px",
      backgroundColor: rootColor,
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
});
