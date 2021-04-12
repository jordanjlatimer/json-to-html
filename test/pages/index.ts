import { CSSObject, SlamPageBuilder } from "../../dist";
import { Home } from "./home";

export default SlamPageBuilder(async () => {
  return [
    {
      name: "jimmy",
      html: Home,
      content: async () => ({ name: "jimmy" }),
      cssReset: true,
      globalStyles: {
        div: {
          border: "2px solid red",
        },
      },
    },
    ...["1", "2", "3"].map(item => ({
      name: item,
      html: Home,
      content: async () => ({ name: item }),
      cssReset: true,
    })),
  ];
});
