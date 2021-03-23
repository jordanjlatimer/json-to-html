import { CSS, div } from "../../../dist";
import { Child } from "../../../dist/slamInterfaces";

export const StyledDiv = (...children: Child[]) => {
  const styles = CSS({
    backgroundColor: "red",
    padding: "50px",
  });
  const styles2 = CSS({
    backgroundColor: "blue",
    padding: "50px",
  });
  return div({ css: styles }, div({ css: styles2 }, ...children));
};
