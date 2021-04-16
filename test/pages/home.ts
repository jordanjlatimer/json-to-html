import { body, Slam, head, html, title, div } from "../../dist";
import { Box } from "./components/Box";
import { ApplyColorRed, FlexColumn } from "./components/UtilityElements";

export const Home = Slam.page((content: any) => {
  const ExtendedDiv = Slam.styledElement(FlexColumn(div), {
    backgroundColor: "tan"
  })
  const js = () => console.log("Hello");
  return html({ js: js }, 
    head(
      title("Test")
    ), 
    body(
      ApplyColorRed(Box("gray")),
      ExtendedDiv(
        div("gray"), 
        div("blue"),
      ),
      ApplyColorRed(Box("gray"))
    )
  );
});
