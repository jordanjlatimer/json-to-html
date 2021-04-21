import { Child, Slam } from "../../../dist";
import { StyledDiv } from "./StyledDiv";

export const Component = (...children: Child[]) => {
  const Root = Slam.styled(StyledDiv, {
    height: "200px",
    width: "200px",
  });

  const js = () => console.log("Component");

  return Root({ js: js }, children);
}
