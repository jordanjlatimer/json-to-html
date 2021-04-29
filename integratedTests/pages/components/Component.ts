import { Child, Slam } from "../../../dist";
import { StyledDiv } from "./StyledDiv";

export const Component = (arg1: string, arg2?: number, ...children: Child[]) => {
  const Root = Slam.styled.element(StyledDiv, {
    height: `200px`,
    width: "200px",
    opacity: arg2
  });

  const js = () => console.log("Component");

  return Root({ js: js }, arg1, children);
}
