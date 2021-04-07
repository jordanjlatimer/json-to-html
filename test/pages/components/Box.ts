import { SlamStyles, div, SlamComponent } from "../../../dist";

export const Box = SlamComponent((inner: string) => {
  const classes = SlamStyles({
    root: {
      height: "200px",
      width: "200px",
      backgroundColor: "white",
      cursor: "move",
    },
  });

  return div({ class: "drag", css: classes.root, draggable: true }, inner);
});
