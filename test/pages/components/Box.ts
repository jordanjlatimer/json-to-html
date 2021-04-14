import { Slam, div } from "../../../dist";

export const Box = Slam.component((inner: string) => {
  const classes = Slam.styles({
    root: {
      height: "200px",
      width: "200px",
      backgroundColor: "white",
      cursor: "move",
      border: "2px solid green",
    },
  });

  return div({ class: "drag", css: classes.root, draggable: true }, inner);
});
