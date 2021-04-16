import { Slam, div } from "../../../dist";

export const Box = Slam.component((inner: string) => {
  const Root = Slam.styled(div, {
    height: "200px",
    width: "200px",
  })

  return Root(inner);
});
