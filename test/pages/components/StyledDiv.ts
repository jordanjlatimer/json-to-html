import { div } from "../../../dist";
import { Child } from "../../../dist/slamInterfaces";

export const StyledDiv = (...children: Child[]) => {
  return div(div(...children));
};
