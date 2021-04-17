import { body, Slam, head, html, title, div } from "../../dist";
import { Box } from "./components/Box";
import { ApplyColorRed, BlueBorder, FlexColumn } from "./components/UtilityElements";
import { NestedCss } from "./components/NestedCssBox"

export const Home = Slam.page((content: any) => {

  const ExtendedDiv = Slam.styled(div, FlexColumn, BlueBorder, {
    backgroundColor: "tan"
  })

  const CssCheck = Slam.styled(div, NestedCss, {
    div: {
      backgroundColor: "red"
    }
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
      CssCheck(
        div(
          "First", 
          div("Second")
        )
      )
    )
  );
});
